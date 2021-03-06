import { TrackResolvers } from '../types';
import { users, userTracks } from '../../db';

const Track: TrackResolvers = {
  uploadedBy(parent, args, context, info) {
    return users.find((user) => user.id === parent.uploadedBy);
  },

  likedBy(parent, args, context, info) {
    const filteredUserTracks = userTracks.filter(
      (userTrack) =>
        userTrack.trackId === parent.id && userTrack.action === 'LIKE'
    );

    return filteredUserTracks.map((userTrack) =>
      users.find((user) => user.id === userTrack.userId)
    );
  },

  repostedBy(parent, args, context, info) {
    const filteredUserTracks = userTracks.filter(
      (userTrack) => userTrack.id === parent.id && userTrack.action === 'REPOST'
    );

    return filteredUserTracks.map((userTrack) =>
      users.find((user) => user.id === userTrack.userId)
    );
  },
};

export default Track;
