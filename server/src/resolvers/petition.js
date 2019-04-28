import Sequelize from 'sequelize';
import {
    combineResolvers
} from 'graphql-resolvers';

import {
    isAuthenticated,
    isPetitionOwner
} from './authorization';

const toCursorHash = string =>
    Buffer.from(string, 'base64').toString('ascii');

export default {
    Query: {
        petitions: async (parent, args, {
            models
        }) => {
            return await models.Petition.findAll();
        },
        petition: async (parent, {
            id
        }, {
            models
        }) => {
            return await models.Petition.findByPk(id);
        },
    },

    Mutation: {
        createPetition: combineResolvers(
            isAuthenticated,
            async (parent, {
                title,
                text
            }, {
                models,
                me
            }) => {
                return await models.Petition.create({
                    title,
                    text,
                    userId: me.id,
                });
            },
        ),

        deleteArticle: combineResolvers(
            isAuthenticated,
            isPetitionOwner,
            async (parent, {
                id
            }, {
                models
            }) => {
                return await models.Petition.destroy({
                    where: {
                        id
                    }
                });
            },
        ),
    },

    Article: {
        user: async (article, args, {
            models
        }) => {
            return await models.User.findByPk(article.userId);
        },
    },
};