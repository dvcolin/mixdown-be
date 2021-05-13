const { users, tracks, userTracks, relatedUsers } = require('../../dummy-data');

const User = {
  uploadedTracks(parent, args, context, info) {
    return tracks.filter((track) => track.uploadedBy === parent.id);
  },

  likedTracks(parent, args, context, info) {
    const filteredUserTracks = userTracks.filter(
      (userTrack) =>
        userTrack.userId === parent.id && userTrack.action === 'LIKE'
    );

    return filteredUserTracks.map((userTrack) =>
      tracks.find((track) => track.id === userTrack.trackId)
    );
  },

  repostedTracks(parent, args, context, info) {
    const filteredUserTracks = userTracks.filter(
      (userTrack) =>
        userTrack.userId === parent.id && userTrack.action === 'REPOST'
    );

    return filteredUserTracks.map((userTrack) =>
      tracks.find((track) => track.id === userTrack.trackId)
    );
  },

  followers(parent, args, context, info) {
    const filteredRelatedUsers = relatedUsers.filter(
      (relatedUser) => relatedUser.followedUserId === parent.id
    );

    return filteredRelatedUsers.map((relatedUser) =>
      users.find((user) => user.id === relatedUser.userId)
    );
  },

  following(parent, args, context, info) {
    const filteredRelatedUsers = relatedUsers.filter(
      (relatedUser) => relatedUser.userId === parent.id
    );

    return filteredRelatedUsers.map((relatedUser) =>
      users.find((user) => user.id === relatedUser.followedUserId)
    );
  },
};

module.exports = User;
