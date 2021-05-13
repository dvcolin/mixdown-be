const { tracks } = require('../../dummy-data');

const User = {
  uploadedTracks(parent, args, context, info) {
    return tracks.filter((track) => track.uploadedBy === parent.id);
  },
};

module.exports = User;
