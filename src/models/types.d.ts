export type UserModel = {
  id: string;
  email: string;
  password: string;
  username: string;
  profileUrl: string;
  profileImageUrl?: string;
  role: UserModelRole;
  numFollowers: number;
  numFollowing: number;
};

type UserModelRole = 'GENERAL' | 'ARTIST' | 'RECORD_LABEL';

export type TrackModel = {
  id: string;
  uploadedBy: string;
  title: string;
  artworkImageUrl: string;
  genre: Genre;
  subgenre?: Subgenre;
  numLikes: number;
  numReposts: number;
};

type Genre = 'HOUSE' | 'DUBSTEP';

type Subgenre = 'DEEP_HOUSE' | 'BASS_HOUSE' | 'MELODIC_DUBSTEP' | 'RIDDIM';

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
