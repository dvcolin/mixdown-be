const { users, tracks } = require('../../dummy-data');

const Query = {
  users(parent, args, context, info) {
    return users;
  },
  tracks(parent, args, context, info) {
    return tracks;
  },
};

module.exports = Query;
