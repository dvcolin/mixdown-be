const { tracks, userTracks } = require('../../dummy-data');

const User = {
  uploadedTracks(parent, args, context, info) {
    return tracks.filter((track) => track.uploadedBy === parent.id);
  },

  likedTracks(parent, args, context, info) {
    const filteredUserTracks = userTracks.filter(
      (track) => track.userId === parent.id && track.action === 'LIKE'
    );
    return filteredUserTracks.map((likedTrack) =>
      tracks.find((track) => track.id === likedTrack.trackId)
    );
  },

  repostedTracks(parent, args, context, info) {
    const filteredUserTracks = userTracks.filter(
      (track) => track.userId === parent.id && track.action === 'REPOST'
    );
    return filteredUserTracks.map((repostedTrack) =>
      tracks.find((track) => track.id === repostedTrack.trackId)
    );
  },
};

module.exports = User;
