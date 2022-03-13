const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    age: Int!
    comics: Comics!
  }

  type Query {
    users: [User!]!
    getUser(id: ID!): User!
  }

  input UserInput {
    name: String!
    age: Int!
    comics: Comics = MARVEL
  }
  input UpdateUserInput {
    name: String
    age: Int
    comics: Comics
  }

  type Mutation {
    createUser(input: UserInput!): User!
    updateUser(id: ID, input: UpdateUserInput): User!
    deleteUser(id: ID): String
  }

  enum Comics {
    MARVEL
    DC
    OTHER
  }
`;

module.exports = { typeDefs };
