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

module.exports = {
  users,
  tracks,
};
