const users = [
  {
    id: '1',
    email: 'user1@email.com',
    password: 'password1',
    username: 'CALCIUM',
    profileUrl: 'calcium-dubstep',
  },
  {
    id: '2',
    email: 'user2@email.com',
    password: 'password2',
    username: 'Aweminus',
    profileUrl: 'aweminus-music',
  },
  {
    id: '3',
    email: 'user3@email.com',
    password: 'password3',
    username: 'Leotrix',
    profileUrl: 'leotrix-dubstep',
  },
];

const tracks = [
  {
    id: '1',
    uploadedBy: '1',
    title: 'Calcium - Blessed',
  },
  {
    id: '2',
    uploadedBy: '1',
    title: 'Exquisite',
  },
  {
    id: '3',
    uploadedBy: '2',
    title: 'Aweminus - UGHH',
  },
  {
    id: '4',
    uploadedBy: '2',
    title: 'Wonton Bass',
  },
  {
    id: '5',
    uploadedBy: '3',
    title: 'Sight',
  },
  {
    id: '6',
    uploadedBy: '3',
    title: 'Play With Fire',
  },
];

const userTracks = [
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

module.exports = {
  users,
  tracks,
  userTracks,
};
