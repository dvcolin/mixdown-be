import { ArtistFieldsResolvers } from '../types';

const ArtistFields: ArtistFieldsResolvers = {
  __resolveType(parent) {
    switch (parent.role) {
      case 'ARTIST':
        return 'Artist';
      case 'RECORD_LABEL':
        return 'RecordLabel';
      default:
        return null;
    }
  },
};

export default ArtistFields;
