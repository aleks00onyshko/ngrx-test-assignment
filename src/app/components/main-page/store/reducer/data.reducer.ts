import { HttpErrorResponse } from '@angular/common/http';
import { createReducer, on } from '@ngrx/store';
import { IPhoto, IPost } from '../../models';
import {
  AddPost,
  AddPostFailure,
  AddPostSuccess,
  GetPhotos,
  GetPhotosFailure,
  GetPhotosSuccess,
  GetPosts,
  GetPostsFailure,
  GetPostsSuccess,
  RemovePost,
  RemovePostFailure,
  RemovePostSuccess,
  UpdatePost,
  UpdatePostFailure,
  UpdatePostSuccess,
} from '../actions/data.actions';

export interface IDataState {
  photos: IPhoto[];
  posts: IPost[];

  top10Photos: IPhoto[];
  top10Posts: IPost[];
  loading: boolean;
  error: HttpErrorResponse | null;
}

export const initialState: IDataState = {
  photos: [],
  posts: [],
  top10Photos: [],
  top10Posts: [],
  loading: true,
  error: null,
};

export const dataReducer = createReducer(
  initialState,
  on(
    GetPhotos,
    GetPosts,
    RemovePost,
    AddPost,
    UpdatePost,
    (state: IDataState) => ({
      ...state,
      loading: true,
    })
  ),
  on(GetPhotosSuccess, (state: IDataState, { photos }) => ({
    ...state,
    loading: false,
    photos,
  })),
  on(GetPostsSuccess, (state: IDataState, { posts }) => ({
    ...state,
    loading: false,
    posts,
  })),
  on(RemovePostSuccess, (state: IDataState, { post }) => ({
    ...state,
    loading: false,
    posts: state.posts.filter((el: IPost) => el.id !== post.id),
  })),
  on(AddPostSuccess, (state: IDataState, { post }) => ({
    ...state,
    loading: false,
    posts: [...state.posts, post],
  })),
  on(UpdatePostSuccess, (state: IDataState, { post: updatedPost }) => ({
    ...state,
    loading: false,
    posts: state.posts.map((currPost) =>
      currPost.id === updatedPost.id ? updatedPost : currPost
    ),
  })),
  on(
    GetPhotosFailure,
    GetPostsFailure,
    RemovePostFailure,
    AddPostFailure,
    UpdatePostFailure,
    (state: IDataState, { error }) => ({
      ...state,
      loading: false,
      error,
    })
  )
);
