import { gql } from 'apollo-server';

const schema = gql`
  type Query {
    allUsers(input: QueryAllUsersInput!): [GeneralUserFields!]!
    allTracks: [Track!]!
  }

  type Mutation {
    createUser(input: CreateUserInput!): GeneralUserFields!
    createTrack(input: CreateTrackInput!): Track!
  }

  interface GeneralUserFields {
    id: ID!
    email: String!
    password: String!
    username: String!
    profileUrl: String!
    role: UserRole!
    likedTracks: [Track!]!
    repostedTracks: [Track!]!
    followers: [GeneralUserFields!]!
    following: [GeneralUserFields!]!
    numFollowers: Int!
    numFollowing: Int!
  }

  interface ArtistFields implements GeneralUserFields {
    id: ID!
    email: String!
    password: String!
    username: String!
    profileUrl: String!
    role: UserRole!
    likedTracks: [Track!]!
    repostedTracks: [Track!]!
    followers: [GeneralUserFields!]!
    following: [GeneralUserFields!]!
    numFollowers: Int!
    numFollowing: Int!
    uploadedTracks: [Track!]!
  }

  type GeneralUser implements GeneralUserFields {
    id: ID!
    email: String!
    password: String!
    username: String!
    profileUrl: String!
    role: UserRole!
    likedTracks: [Track!]!
    repostedTracks: [Track!]!
    followers: [GeneralUserFields!]!
    following: [GeneralUserFields!]!
    numFollowers: Int!
    numFollowing: Int!
  }

  type Artist implements GeneralUserFields & ArtistFields {
    id: ID!
    email: String!
    password: String!
    username: String!
    profileUrl: String!
    role: UserRole!
    likedTracks: [Track!]!
    repostedTracks: [Track!]!
    followers: [GeneralUserFields!]!
    following: [GeneralUserFields!]!
    numFollowers: Int!
    numFollowing: Int!
    uploadedTracks: [Track!]!
  }

  type RecordLabel implements GeneralUserFields & ArtistFields {
    id: ID!
    email: String!
    password: String!
    username: String!
    profileUrl: String!
    role: UserRole!
    likedTracks: [Track!]!
    repostedTracks: [Track!]!
    followers: [GeneralUserFields!]!
    following: [GeneralUserFields!]!
    numFollowers: Int!
    numFollowing: Int!
    uploadedTracks: [Track!]!
  }

  type Track {
    id: ID!
    uploadedBy: ArtistFields!
    title: String!
    likedBy: [GeneralUserFields!]!
    repostedBy: [GeneralUserFields!]!
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

  input QueryAllUsersInput {
    queryString: String
    role: UserRole
  }
`;

export default schema;
