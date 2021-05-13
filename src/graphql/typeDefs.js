const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    users: [User!]!
    tracks: [Track!]!
  }

  type User {
    id: ID!
    email: String!
    password: String!
    username: String!
    profileUrl: String!
    uploadedTracks: [Track!]!
  }

  type Track {
    id: ID!
    uploadedBy: User!
    title: String!
  }
`;

module.exports = typeDefs;
