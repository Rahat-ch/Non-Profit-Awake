import { ForbiddenError } from 'apollo-server';
import { combineResolvers, skip } from 'graphql-resolvers'

export const isAuthenticated = (parent, args, { me }) =>
    me ? skip : new ForbiddenError('Not Authenticated as user')

export const isOrg = combineResolvers(
    isAuthenticated,
    (parent, args, { me: { role } }) =>
        role === 'ORG'
        ? skip
        : new ForbiddenError('Not authorized as organization.'),
);

export const isArticleOwner = async(
    parent,
    { id },
    { models, me },
) => {
    const article = await models.Article.findByPk(id, { raw: true });

    if(article.userId !== me.id) {
        throw new ForbiddenError('Not authenticated as owner.');
    }
    return skip;
};