import { GeneralUserResolvers } from '../types';
import { users, tracks, userTracks, relatedUsers } from '../../db';

const GeneralUser: GeneralUserResolvers = {
  likedTracks(parent, args, context, info) {
    const filteredUserTracks = userTracks.filter(
      (userTrack) =>
        userTrack.userId === parent.id && userTrack.action === 'LIKE'
    );

    return filteredUserTracks.map((userTrack) =>
      tracks.find((track) => track.id === userTrack.trackId)
    );
  },

  repostedTracks(parent, args, context, info) {
    const filteredUserTracks = userTracks.filter(
      (userTrack) =>
        userTrack.userId === parent.id && userTrack.action === 'REPOST'
    );

    return filteredUserTracks.map((userTrack) =>
      tracks.find((track) => track.id === userTrack.trackId)
    );
  },

  followers(parent, args, context, info) {
    const filteredRelatedUsers = relatedUsers.filter(
      (relatedUser) => relatedUser.followedUserId === parent.id
    );

    return filteredRelatedUsers.map((relatedUser) =>
      users.find((user) => user.id === relatedUser.userId)
    );
  },

  following(parent, args, context, info) {
    const filteredRelatedUsers = relatedUsers.filter(
      (relatedUser) => relatedUser.userId === parent.id
    );

    return filteredRelatedUsers.map((relatedUser) =>
      users.find((user) => user.id === relatedUser.followedUserId)
    );
  },
};

export default GeneralUser;
