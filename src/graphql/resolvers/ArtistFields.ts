import { ApolloError } from 'apollo-server';
import { ArtistFieldsResolvers } from '../types';

const ArtistFields: ArtistFieldsResolvers = {
  __resolveType(parent) {
    switch (parent.role) {
      case 'ARTIST':
        return 'Artist';
      case 'RECORD_LABEL':
        return 'RecordLabel';
      default:
        throw new ApolloError(
          'Validation failed.',
          'GRAPHQL_VALIDATION_FAILED'
        );
    }
  },
};

export default ArtistFields;
