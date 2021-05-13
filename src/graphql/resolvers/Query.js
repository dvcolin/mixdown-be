const { users, tracks } = require('../../dummy-data');

const Query = {
  users() {
    return users;
  },
  tracks() {
    return tracks;
  },
};

module.exports = Query;
