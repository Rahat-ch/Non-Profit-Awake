import Sequelize from 'sequelize';
import { combineResolvers } from 'graphql-resolvers';

import { isAuthenticated, isArticleOwner } from './authorization';

const toCursorHash = string =>
  Buffer.from(string, 'base64').toString('ascii');

export default {
  Query: {
    articles: async (parent, args, {
      models
    }) => {
      return await models.Article.findAll();
    },
    article: async (parent, {
      id
    }, {
      models
    }) => {
      return await models.Article.findByPk(id);
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