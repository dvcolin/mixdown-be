export type UserModel = {
  id: string;
  email: string;
  password: string;
  username: string;
  profileUrl: string;
  role: UserModelRole;
  numFollowers: number;
  numFollowing: number;
};

type UserModelRole = 'GENERAL' | 'ARTIST' | 'RECORD_LABEL';

export type TrackModel = {
  id: string;
  uploadedBy: string;
  title: string;
  numLikes: number;
  numReposts: number;
};

export interface UserTrackModel {
  id: string;
  userId: string;
  trackId: string;
  action: UserTrackModelAction;
}

type UserTrackModelAction = 'LIKE' | 'REPOST';

export interface RelatedUserModel {
  id: string;
  userId: string;
  followedUserId: string;
}
