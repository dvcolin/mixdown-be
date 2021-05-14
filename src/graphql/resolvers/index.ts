import { Resolvers } from '../types';
import Query from './Query';
import Mutation from './Mutation';
import GeneralUserFields from './GeneralUserFields';
import ArtistFields from './ArtistFields';
import GeneralUser from './GeneralUser';
import Artist from './Artist';
import RecordLabel from './RecordLabel';
import Track from './Track';

const resolvers: Resolvers = {
  Query,
  Mutation,
  GeneralUserFields,
  ArtistFields,
  GeneralUser,
  Artist,
  RecordLabel,
  Track,
};

export default resolvers;
