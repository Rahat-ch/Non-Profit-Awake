import Sequelize from 'sequelize';
import { combineResolvers } from 'graphql-resolvers';

import { isAuthenticated, isArticleOwner } from './authorization';

const toCursorHash = string =>
  Buffer.from(string, 'base64').toString('ascii');

export default {
  Query: {
    articles: async (parent, {
      cursor,
      limit = 100
    }, {
      models
    }) => {
      const cursorOptions = cursor
      ? {
        where: {
          createdAt: {
            [Sequelize.Op.lt]: fromCursorHash(cursor),
          },
        },
      }
      : {};
      
      const articles = await models.Articles.findAll({
        order: [['createdAt', 'DESC']],
        limit: limit + 1,
        ...cursorOptions,
      });

      const hasNextPage = articles.length > limit;
      const edges = hasNextPage ? articles.slice(0, -1) : articles;

      return {
        edges,
        pageInfo: {
          hasNextPage,
          endCursor: toCursorHash(
            edges[edges.length -1].createdAt.toString(),
          ),
        },
      };
    },
    article: async (parent, {
      id
    }, {
      models
    }) => {
      return await models.Article.findById(id);
    },
  },

  Mutation: {
    createArticle: combineResolvers(
      isAuthenticated,
      async (parent, { title, text }, { models, me }) => {
        return await models.Article.create({
          title,
          text,
          userId: me.id,
        });
      },
    ),

    deleteArticle: combineResolvers(
      isAuthenticated,
      isArticleOwner,
      async (parent, { id }, { models }) => {
        return await models.Article.destroy({ where: { id } });
      },
    ),
  },

  Article: {
    user: async (article, args, { models }) => {
      return await models.User.findByPk(article.userId);
    },
  },
};