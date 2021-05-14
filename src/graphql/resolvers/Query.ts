import { QueryResolvers } from '../types';
import { users, tracks } from '../../db';

const Query: QueryResolvers = {
  users(parent, args, context, info) {
    return users;
  },
  tracks(parent, args, context, info) {
    return tracks;
  },
};

export default Query;
