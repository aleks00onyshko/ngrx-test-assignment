import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  catchError,
  delay,
  map,
  switchMap,
  withLatestFrom,
} from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { EndpointService } from '../../../../server';
import { IPhoto, IPost } from '../../models';
import {
  AddPost,
  AddPostFailure,
  AddPostSuccess,
  GetPhotos,
  GetPhotosFailure,
  GetPhotosSuccess,
  GetPosts,
  GetPostsSuccess,
  RemovePost,
  RemovePostSuccess,
  UpdatePost,
  UpdatePostSuccess,
} from '../actions';
import { v4 as uuidv4 } from 'uuid';
import { IDataState } from '../reducer';
import { posts } from '../selectors';

@Injectable()
export class DataEffects {
  constructor(
    private actions$: Actions,
    private store: Store<IDataState>,
    private endpointService: EndpointService
  ) {}

  getPhotos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GetPhotos),
      switchMap(() => {
        return this.endpointService.getPhotos().pipe(
          delay(1000),
          map((photos: IPhoto[]) => {
            return GetPhotosSuccess({ photos: photos });
          }),
          catchError((error: HttpErrorResponse) => {
            return of(GetPhotosFailure({ error: error }));
          })
        );
      })
    )
  );

  getPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GetPosts),
      switchMap(() => {
        return this.endpointService.getPosts().pipe(
          delay(1000),
          map((posts: IPost[]) => {
            return GetPostsSuccess({ posts: posts });
          }),
          catchError((error: HttpErrorResponse) => {
            return of(GetPhotosFailure({ error: error }));
          })
        );
      })
    )
  );

  removePost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RemovePost),
      withLatestFrom(this.store.select(posts)),
      switchMap(([{ post }, posts]) => {
        return this.endpointService.removePost(post.id).pipe(
          map(() => {
            return RemovePostSuccess({ post });
          }),
          catchError((error: HttpErrorResponse) => {
            return of(GetPhotosFailure({ error: error }));
          })
        );
      })
    )
  );

  addPost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AddPost),
      delay(1000),
      withLatestFrom(this.store.select(posts)),
      switchMap(([{ body, title }]) => {
        const post: IPost = {
          userId: uuidv4(),
          title,
          body,
          id: uuidv4(),
        };
        return this.endpointService.addPost(post).pipe(
          map((post: IPost) => {
            return AddPostSuccess({ post });
          }),
          catchError((error: HttpErrorResponse) =>
            of(AddPostFailure({ error }))
          )
        );
      })
    )
  );

  updateTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UpdatePost),
      switchMap(({ title, body, id }) => {
        return this.endpointService.updatePost(id, title, body).pipe(
          map((post: IPost) => {
            console.log('updated post?', post);
            return UpdatePostSuccess({ post });
          })
        );
      })
    )
  );
}
