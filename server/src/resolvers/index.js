import { GraphQLDateTime } from 'graphql-iso-date'

import userResolvers from '../resolvers/user';
import articleResolvers from '../resolvers/article';

const customScalarResolver = {
    Date: GraphQLDateTime,
}

export default [
    customScalarResolver,
    userResolvers, 
    articleResolvers,
];