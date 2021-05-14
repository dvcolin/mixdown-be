const { users, tracks } = require('../../dummy-data');

const Mutation = {
  createUser(parent, args, context, info) {
    const {
      input: { email, password, username, profileUrl, role },
    } = args;

    const newUser = {
      id: (users.length + 1).toString(),
      email,
      password,
      username,
      profileUrl,
      role,
      likedTracks: [],
      repostedTracks: [],
      followers: [],
      following: [],
      numFollowers: 0,
      numFollowing: 0,
    };

    users.push(newUser);

    return users.find((user) => user.id === newUser.id);
  },

  createTrack(parent, args, context, info) {
    const {
      input: { uploadedBy, title },
    } = args;

    const newTrack = {
      id: (tracks.length + 1).toString(),
      uploadedBy,
      title,
      likedBy: [],
      repostedBy: [],
      numLikes: 0,
      numReposts: 0,
    };

    tracks.push(newTrack);

    return tracks.find((track) => track.id === newTrack.id);
  },
};

module.exports = Mutation;
