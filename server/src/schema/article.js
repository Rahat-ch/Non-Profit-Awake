import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    articles: [Article!] !
    article(id: ID!): Article!
  }
  extend type Mutation {
    createArticle(text: String!): Article!
    deleteArticle(id: ID!): Boolean!
  }
  type ArticleConnection {
    edges: [Article!]!
    pageInfo: PageInfo!
  }
  type PageInfo {
    hasNextPage: Boolean!
    endCursor: Date!
  }
  type Article {
    id: ID!
    title: String!
    text: String!
    createdAt: Date!
    user: User!
  }
`;