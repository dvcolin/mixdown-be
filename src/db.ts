import {
  UserModel,
  TrackModel,
  UserTrackModel,
  RelatedUserModel,
} from './models/types';

export const users: UserModel[] = [
  {
    id: '1',
    email: 'user1@email.com',
    password: 'password1',
    username: 'CALCIUM',
    profileUrl: 'calcium-dubstep',
    role: 'GENERAL',
    numFollowers: 8,
    numFollowing: 5,
  },
  {
    id: '2',
    email: 'user2@email.com',
    password: 'password2',
    username: 'Aweminus',
    profileUrl: 'aweminus-music',
    role: 'ARTIST',
    numFollowers: 8,
    numFollowing: 5,
  },
  {
    id: '3',
    email: 'user3@email.com',
    password: 'password3',
    username: 'Leotrix',
    profileUrl: 'leotrix-dubstep',
    role: 'ARTIST',
    numFollowers: 8,
    numFollowing: 5,
  },
];

export const tracks: TrackModel[] = [
  {
    id: '1',
    uploadedBy: '2',
    title: 'Calcium - Blessed',
    numLikes: 10200,
    numReposts: 624,
  },
  {
    id: '2',
    uploadedBy: '3',
    title: 'Exquisite',
    numLikes: 10200,
    numReposts: 624,
  },
  {
    id: '3',
    uploadedBy: '2',
    title: 'Aweminus - UGHH',
    numLikes: 10200,
    numReposts: 624,
  },
  {
    id: '4',
    uploadedBy: '2',
    title: 'Wonton Bass',
    numLikes: 10200,
    numReposts: 624,
  },
  {
    id: '5',
    uploadedBy: '3',
    title: 'Sight',
    numLikes: 10200,
    numReposts: 624,
  },
  {
    id: '6',
    uploadedBy: '3',
    title: 'Play With Fire',
    numLikes: 10200,
    numReposts: 624,
  },
];

export const userTracks: UserTrackModel[] = [
  {
    id: '1',
    userId: '1',
    trackId: '1',
    action: 'LIKE',
  },
  {
    id: '2',
    userId: '3',
    trackId: '3',
    action: 'REPOST',
  },
  {
    id: '3',
    userId: '2',
    trackId: '1',
    action: 'LIKE',
  },
  {
    id: '4',
    userId: '1',
    trackId: '5',
    action: 'REPOST',
  },
  {
    id: '5',
    userId: '2',
    trackId: '2',
    action: 'LIKE',
  },
  {
    id: '6',
    userId: '3',
    trackId: '2',
    action: 'LIKE',
  },
];

export const relatedUsers: RelatedUserModel[] = [
  {
    id: '1',
    userId: '1',
    followedUserId: '2',
  },
  {
    id: '2',
    userId: '1',
    followedUserId: '3',
  },
  {
    id: '3',
    userId: '2',
    followedUserId: '1',
  },
];
