import { Resolvers } from '../types';
import Query from './Query';
import Mutation from './Mutation';
import User from './User';
import Track from './Track';

const resolvers: Resolvers = {
  Query,
  Mutation,
  User,
  Track,
};

export default resolvers;
