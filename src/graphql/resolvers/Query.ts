import { QueryResolvers } from '../types';
import { users, tracks } from '../../db';

const Query: QueryResolvers = {
  allUsers(parent, args, context, info) {
    const {
      input: { queryString, role },
    } = args;

    if (queryString || role) {
      let filteredUsers = [...users];

      if (queryString) {
        filteredUsers = filteredUsers.filter((user) =>
          user.username.toLowerCase().includes(queryString.toLowerCase())
        );
      }

      if (role) {
        filteredUsers = filteredUsers.filter((user) => user.role === role);
      }

      return filteredUsers;
    }

    return users;
  },
  allTracks(parent, args, context, info) {
    return tracks;
  },
};

export default Query;
