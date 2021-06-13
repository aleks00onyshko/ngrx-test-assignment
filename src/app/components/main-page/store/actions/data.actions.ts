import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { IPhoto, IPost } from '../../models';

export const GetPhotos = createAction('Get Photos');

export const GetPhotosSuccess = createAction(
  'Get Photos Success',
  props<{ photos: IPhoto[] }>()
);

export const GetPhotosFailure = createAction(
  'Get Photos Failure',
  props<{ error: HttpErrorResponse }>()
);

export const GetPosts = createAction('Get Posts');

export const GetPostsSuccess = createAction(
  'Get Posts Success',
  props<{ posts: IPost[] }>()
);
export const GetPostsFailure = createAction(
  'Get Posts Failure',
  props<{ error: HttpErrorResponse }>()
);

export const RemovePost = createAction('Remove Post', props<{ post: IPost }>());

export const RemovePostSuccess = createAction(
  'Remove Post Success',
  props<{ post: IPost }>()
);

export const RemovePostFailure = createAction(
  'Remove Todo Failure',
  props<{ error: HttpErrorResponse }>()
);

export const AddPost = createAction(
  'Add Post',
  props<{ title: string; body: string }>()
);

export const AddPostSuccess = createAction(
  'Add Post Success',
  props<{ post: IPost }>()
);

export const AddPostFailure = createAction(
  'Add Post Failure',
  props<{ error: HttpErrorResponse }>()
);

export const UpdatePost = createAction(
  'Update Post',
  props<{ id: string; title: string; body: string }>()
);

export const UpdatePostSuccess = createAction(
  'Update Post Success',
  props<{ post: IPost }>()
);

export const UpdatePostFailure = createAction(
  'Update Post Fail',
  props<{ error: HttpErrorResponse }>()
);
