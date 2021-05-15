import { ApolloError } from 'apollo-server';
import { GeneralUserFieldsResolvers } from '../types';

const GeneralUserFields: GeneralUserFieldsResolvers = {
  __resolveType(parent) {
    switch (parent.role) {
      case 'GENERAL':
        return 'GeneralUser';
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

export default GeneralUserFields;
