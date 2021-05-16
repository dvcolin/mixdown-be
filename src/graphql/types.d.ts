import { GraphQLResolveInfo } from 'graphql';
import { UserModel, TrackModel } from './src/models/types';
import { UserModel } from './src/models/type';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  allUsers: Array<GeneralUserFields>;
  allTracks: Array<Track>;
};


export type QueryAllUsersArgs = {
  input: QueryAllUsersInput;
};


export type QueryAllTracksArgs = {
  input: QueryAllTracksInput;
};

export type GeneralUserFields = {
  id: Scalars['ID'];
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
  profileUrl: Scalars['String'];
  profileImageUrl: Scalars['String'];
  role: UserRole;
  likedTracks: Array<Track>;
  repostedTracks: Array<Track>;
  followers: Array<GeneralUserFields>;
  following: Array<GeneralUserFields>;
  numFollowers: Scalars['Int'];
  numFollowing: Scalars['Int'];
};

export type ArtistFields = {
  id: Scalars['ID'];
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
  profileUrl: Scalars['String'];
  profileImageUrl: Scalars['String'];
  role: UserRole;
  likedTracks: Array<Track>;
  repostedTracks: Array<Track>;
  followers: Array<GeneralUserFields>;
  following: Array<GeneralUserFields>;
  numFollowers: Scalars['Int'];
  numFollowing: Scalars['Int'];
  uploadedTracks: Array<Track>;
};

export type GeneralUser = GeneralUserFields & {
  __typename?: 'GeneralUser';
  id: Scalars['ID'];
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
  profileUrl: Scalars['String'];
  profileImageUrl: Scalars['String'];
  role: UserRole;
  likedTracks: Array<Track>;
  repostedTracks: Array<Track>;
  followers: Array<GeneralUserFields>;
  following: Array<GeneralUserFields>;
  numFollowers: Scalars['Int'];
  numFollowing: Scalars['Int'];
};

export type Artist = GeneralUserFields & ArtistFields & {
  __typename?: 'Artist';
  id: Scalars['ID'];
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
  profileUrl: Scalars['String'];
  profileImageUrl: Scalars['String'];
  role: UserRole;
  likedTracks: Array<Track>;
  repostedTracks: Array<Track>;
  followers: Array<GeneralUserFields>;
  following: Array<GeneralUserFields>;
  numFollowers: Scalars['Int'];
  numFollowing: Scalars['Int'];
  uploadedTracks: Array<Track>;
};

export type RecordLabel = GeneralUserFields & ArtistFields & {
  __typename?: 'RecordLabel';
  id: Scalars['ID'];
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
  profileUrl: Scalars['String'];
  profileImageUrl: Scalars['String'];
  role: UserRole;
  likedTracks: Array<Track>;
  repostedTracks: Array<Track>;
  followers: Array<GeneralUserFields>;
  following: Array<GeneralUserFields>;
  numFollowers: Scalars['Int'];
  numFollowing: Scalars['Int'];
  uploadedTracks: Array<Track>;
};

export type Track = {
  __typename?: 'Track';
  id: Scalars['ID'];
  uploadedBy: ArtistFields;
  title: Scalars['String'];
  artworkImageUrl: Scalars['String'];
  genre: Genre;
  subgenre?: Maybe<Subgenre>;
  likedBy: Array<GeneralUserFields>;
  repostedBy: Array<GeneralUserFields>;
  numLikes: Scalars['Int'];
  numReposts: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createUser: GeneralUserFields;
  createTrack: Track;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


export type MutationCreateTrackArgs = {
  input: CreateTrackInput;
};

export enum Genre {
  House = 'HOUSE',
  Dubstep = 'DUBSTEP'
}

export enum Subgenre {
  DeepHouse = 'DEEP_HOUSE',
  BassHouse = 'BASS_HOUSE',
  MelodicDubstep = 'MELODIC_DUBSTEP',
  Riddim = 'RIDDIM'
}

export type CreateUserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
  profileUrl: Scalars['String'];
  profileImageUrl?: Maybe<Scalars['String']>;
  role: UserRole;
};

export type CreateTrackInput = {
  uploadedBy: Scalars['ID'];
  title: Scalars['String'];
  artworkImageUrl?: Maybe<Scalars['String']>;
  genre: Genre;
  subgenre?: Maybe<Subgenre>;
};

export type QueryAllUsersInput = {
  queryString?: Maybe<Scalars['String']>;
  role?: Maybe<UserRole>;
};

export type QueryAllTracksInput = {
  queryString?: Maybe<Scalars['String']>;
  genre?: Maybe<Genre>;
  subgenre?: Maybe<Subgenre>;
};

export enum UserRole {
  General = 'GENERAL',
  Artist = 'ARTIST',
  RecordLabel = 'RECORD_LABEL'
}

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Query: ResolverTypeWrapper<{}>;
  GeneralUserFields: ResolverTypeWrapper<UserModel>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  ArtistFields: ResolverTypeWrapper<UserModel>;
  GeneralUser: ResolverTypeWrapper<Omit<GeneralUser, 'likedTracks' | 'repostedTracks' | 'followers' | 'following'> & { likedTracks: Array<ResolversTypes['Track']>, repostedTracks: Array<ResolversTypes['Track']>, followers: Array<ResolversTypes['GeneralUserFields']>, following: Array<ResolversTypes['GeneralUserFields']> }>;
  Artist: ResolverTypeWrapper<Omit<Artist, 'likedTracks' | 'repostedTracks' | 'followers' | 'following' | 'uploadedTracks'> & { likedTracks: Array<ResolversTypes['Track']>, repostedTracks: Array<ResolversTypes['Track']>, followers: Array<ResolversTypes['GeneralUserFields']>, following: Array<ResolversTypes['GeneralUserFields']>, uploadedTracks: Array<ResolversTypes['Track']> }>;
  RecordLabel: ResolverTypeWrapper<Omit<RecordLabel, 'likedTracks' | 'repostedTracks' | 'followers' | 'following' | 'uploadedTracks'> & { likedTracks: Array<ResolversTypes['Track']>, repostedTracks: Array<ResolversTypes['Track']>, followers: Array<ResolversTypes['GeneralUserFields']>, following: Array<ResolversTypes['GeneralUserFields']>, uploadedTracks: Array<ResolversTypes['Track']> }>;
  Track: ResolverTypeWrapper<TrackModel>;
  Mutation: ResolverTypeWrapper<{}>;
  Genre: Genre;
  Subgenre: Subgenre;
  CreateUserInput: CreateUserInput;
  CreateTrackInput: CreateTrackInput;
  QueryAllUsersInput: QueryAllUsersInput;
  QueryAllTracksInput: QueryAllTracksInput;
  UserRole: UserRole;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {};
  GeneralUserFields: UserModel;
  ID: Scalars['ID'];
  String: Scalars['String'];
  Int: Scalars['Int'];
  ArtistFields: UserModel;
  GeneralUser: Omit<GeneralUser, 'likedTracks' | 'repostedTracks' | 'followers' | 'following'> & { likedTracks: Array<ResolversParentTypes['Track']>, repostedTracks: Array<ResolversParentTypes['Track']>, followers: Array<ResolversParentTypes['GeneralUserFields']>, following: Array<ResolversParentTypes['GeneralUserFields']> };
  Artist: Omit<Artist, 'likedTracks' | 'repostedTracks' | 'followers' | 'following' | 'uploadedTracks'> & { likedTracks: Array<ResolversParentTypes['Track']>, repostedTracks: Array<ResolversParentTypes['Track']>, followers: Array<ResolversParentTypes['GeneralUserFields']>, following: Array<ResolversParentTypes['GeneralUserFields']>, uploadedTracks: Array<ResolversParentTypes['Track']> };
  RecordLabel: Omit<RecordLabel, 'likedTracks' | 'repostedTracks' | 'followers' | 'following' | 'uploadedTracks'> & { likedTracks: Array<ResolversParentTypes['Track']>, repostedTracks: Array<ResolversParentTypes['Track']>, followers: Array<ResolversParentTypes['GeneralUserFields']>, following: Array<ResolversParentTypes['GeneralUserFields']>, uploadedTracks: Array<ResolversParentTypes['Track']> };
  Track: TrackModel;
  Mutation: {};
  CreateUserInput: CreateUserInput;
  CreateTrackInput: CreateTrackInput;
  QueryAllUsersInput: QueryAllUsersInput;
  QueryAllTracksInput: QueryAllTracksInput;
  Boolean: Scalars['Boolean'];
}>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  allUsers?: Resolver<Array<ResolversTypes['GeneralUserFields']>, ParentType, ContextType, RequireFields<QueryAllUsersArgs, 'input'>>;
  allTracks?: Resolver<Array<ResolversTypes['Track']>, ParentType, ContextType, RequireFields<QueryAllTracksArgs, 'input'>>;
}>;

export type GeneralUserFieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['GeneralUserFields'] = ResolversParentTypes['GeneralUserFields']> = ResolversObject<{
  __resolveType: TypeResolveFn<'GeneralUser' | 'Artist' | 'RecordLabel', ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  password?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  profileUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  profileImageUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['UserRole'], ParentType, ContextType>;
  likedTracks?: Resolver<Array<ResolversTypes['Track']>, ParentType, ContextType>;
  repostedTracks?: Resolver<Array<ResolversTypes['Track']>, ParentType, ContextType>;
  followers?: Resolver<Array<ResolversTypes['GeneralUserFields']>, ParentType, ContextType>;
  following?: Resolver<Array<ResolversTypes['GeneralUserFields']>, ParentType, ContextType>;
  numFollowers?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  numFollowing?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
}>;

export type ArtistFieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['ArtistFields'] = ResolversParentTypes['ArtistFields']> = ResolversObject<{
  __resolveType: TypeResolveFn<'Artist' | 'RecordLabel', ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  password?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  profileUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  profileImageUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['UserRole'], ParentType, ContextType>;
  likedTracks?: Resolver<Array<ResolversTypes['Track']>, ParentType, ContextType>;
  repostedTracks?: Resolver<Array<ResolversTypes['Track']>, ParentType, ContextType>;
  followers?: Resolver<Array<ResolversTypes['GeneralUserFields']>, ParentType, ContextType>;
  following?: Resolver<Array<ResolversTypes['GeneralUserFields']>, ParentType, ContextType>;
  numFollowers?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  numFollowing?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  uploadedTracks?: Resolver<Array<ResolversTypes['Track']>, ParentType, ContextType>;
}>;

export type GeneralUserResolvers<ContextType = any, ParentType extends ResolversParentTypes['GeneralUser'] = ResolversParentTypes['GeneralUser']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  password?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  profileUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  profileImageUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['UserRole'], ParentType, ContextType>;
  likedTracks?: Resolver<Array<ResolversTypes['Track']>, ParentType, ContextType>;
  repostedTracks?: Resolver<Array<ResolversTypes['Track']>, ParentType, ContextType>;
  followers?: Resolver<Array<ResolversTypes['GeneralUserFields']>, ParentType, ContextType>;
  following?: Resolver<Array<ResolversTypes['GeneralUserFields']>, ParentType, ContextType>;
  numFollowers?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  numFollowing?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ArtistResolvers<ContextType = any, ParentType extends ResolversParentTypes['Artist'] = ResolversParentTypes['Artist']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  password?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  profileUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  profileImageUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['UserRole'], ParentType, ContextType>;
  likedTracks?: Resolver<Array<ResolversTypes['Track']>, ParentType, ContextType>;
  repostedTracks?: Resolver<Array<ResolversTypes['Track']>, ParentType, ContextType>;
  followers?: Resolver<Array<ResolversTypes['GeneralUserFields']>, ParentType, ContextType>;
  following?: Resolver<Array<ResolversTypes['GeneralUserFields']>, ParentType, ContextType>;
  numFollowers?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  numFollowing?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  uploadedTracks?: Resolver<Array<ResolversTypes['Track']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RecordLabelResolvers<ContextType = any, ParentType extends ResolversParentTypes['RecordLabel'] = ResolversParentTypes['RecordLabel']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  password?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  profileUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  profileImageUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['UserRole'], ParentType, ContextType>;
  likedTracks?: Resolver<Array<ResolversTypes['Track']>, ParentType, ContextType>;
  repostedTracks?: Resolver<Array<ResolversTypes['Track']>, ParentType, ContextType>;
  followers?: Resolver<Array<ResolversTypes['GeneralUserFields']>, ParentType, ContextType>;
  following?: Resolver<Array<ResolversTypes['GeneralUserFields']>, ParentType, ContextType>;
  numFollowers?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  numFollowing?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  uploadedTracks?: Resolver<Array<ResolversTypes['Track']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TrackResolvers<ContextType = any, ParentType extends ResolversParentTypes['Track'] = ResolversParentTypes['Track']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  uploadedBy?: Resolver<ResolversTypes['ArtistFields'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  artworkImageUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  genre?: Resolver<ResolversTypes['Genre'], ParentType, ContextType>;
  subgenre?: Resolver<Maybe<ResolversTypes['Subgenre']>, ParentType, ContextType>;
  likedBy?: Resolver<Array<ResolversTypes['GeneralUserFields']>, ParentType, ContextType>;
  repostedBy?: Resolver<Array<ResolversTypes['GeneralUserFields']>, ParentType, ContextType>;
  numLikes?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  numReposts?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  createUser?: Resolver<ResolversTypes['GeneralUserFields'], ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'input'>>;
  createTrack?: Resolver<ResolversTypes['Track'], ParentType, ContextType, RequireFields<MutationCreateTrackArgs, 'input'>>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  Query?: QueryResolvers<ContextType>;
  GeneralUserFields?: GeneralUserFieldsResolvers<ContextType>;
  ArtistFields?: ArtistFieldsResolvers<ContextType>;
  GeneralUser?: GeneralUserResolvers<ContextType>;
  Artist?: ArtistResolvers<ContextType>;
  RecordLabel?: RecordLabelResolvers<ContextType>;
  Track?: TrackResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
}>;


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
