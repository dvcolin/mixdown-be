import { MutationResolvers } from '../types';
import { users, tracks } from '../../db';

const Mutation: MutationResolvers = {
  createUser(parent, args, context, info) {
    const {
      input: { email, password, username, profileUrl, profileImageUrl, role },
    } = args;

    const newUser = {
      id: (users.length + 1).toString(),
      email,
      password,
      username,
      profileUrl,
      profileImageUrl: profileImageUrl || '',
      role,
      numFollowers: 0,
      numFollowing: 0,
    };

    users.push(newUser);

    return newUser;
  },

  createTrack(parent, args, context, info) {
    const {
      input: { uploadedBy, title, artworkImageUrl, genre, subgenre },
    } = args;

    const newTrack = {
      id: (tracks.length + 1).toString(),
      uploadedBy,
      title,
      artworkImageUrl: artworkImageUrl || '',
      genre,
      subgenre: subgenre || undefined,
      numLikes: 0,
      numReposts: 0,
    };

    tracks.push(newTrack);

    return newTrack;
  },
};

export default Mutation;
