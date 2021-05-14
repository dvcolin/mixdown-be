const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    users: [User!]!
    tracks: [Track!]!
  }

  type Mutation {
    createUser(input: CreateUserInput!): User!
    createTrack(input: CreateTrackInput!): Track!
  }

  type User {
    id: ID!
    email: String!
    password: String!
    username: String!
    profileUrl: String!
    role: UserRole!
    uploadedTracks: [Track!]!
    likedTracks: [Track!]!
    repostedTracks: [Track!]!
    followers: [User!]!
    following: [User!]!
    numFollowers: Int!
    numFollowing: Int!
  }

  type Track {
    id: ID!
    uploadedBy: User!
    title: String!
    likedBy: [User!]!
    repostedBy: [User!]!
    numLikes: Int!
    numReposts: Int!
  }

  enum UserRole {
    GENERAL
    ARTIST
    RECORD_LABEL
  }

  input CreateUserInput {
    email: String!
    password: String!
    username: String!
    profileUrl: String!
    role: UserRole!
  }

  input CreateTrackInput {
    uploadedBy: ID!
    title: String!
  }
`;

module.exports = typeDefs;
