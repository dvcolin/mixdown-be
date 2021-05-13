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
    likedTracks: [Track!]!
    repostedTracks: [Track!]!
  }

  type Track {
    id: ID!
    uploadedBy: User!
    title: String!
    likedBy: [User!]!
    repostedBy: [User!]!
  }
`;

module.exports = typeDefs;
