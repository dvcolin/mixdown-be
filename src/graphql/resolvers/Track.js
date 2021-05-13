const { users } = require('../../dummy-data');

const Track = {
  uploadedBy(parent, args, context, info) {
    return users.find((user) => user.id === parent.uploadedBy);
  },
};

module.exports = Track;
