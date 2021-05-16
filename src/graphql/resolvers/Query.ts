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
    const {
      input: { queryString, genre, subgenre },
    } = args;
    if (queryString || genre || subgenre) {
      let filteredTracks = [...tracks];

      if (queryString) {
        filteredTracks = filteredTracks.filter((track) =>
          track.title.toLowerCase().includes(queryString.toLowerCase())
        );
      }

      if (genre) {
        filteredTracks = filteredTracks.filter(
          (track) => track.genre === genre
        );
      }

      if (subgenre) {
        filteredTracks = filteredTracks.filter(
          (track) => track.subgenre === subgenre
        );
      }

      return filteredTracks;
    }
    return tracks;
  },
};

export default Query;
