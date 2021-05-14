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
        return null;
    }
  },
};

export default GeneralUserFields;
