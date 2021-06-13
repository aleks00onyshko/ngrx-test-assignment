import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IPost } from '../../models';
import { AddPost, IDataState, posts, RemovePost } from '../../store';
import { EditPostDialogComponent } from './update-post-dialog';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent {
  public posts$: Observable<IPost[]> = this.store.select(posts);

  public createPostForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    body: new FormControl('', [Validators.required]),
  });

  public controls = {
    title: this.createPostForm.get('title') as FormControl,
    body: this.createPostForm.get('body') as FormControl,
  };

  constructor(
    private readonly store: Store<IDataState>,
    public dialog: MatDialog
  ) {}

  public addPost(): void {
    const { title, body } = this.createPostForm.value;

    this.store.dispatch(AddPost({ title, body }));
    this.createPostForm.reset('');
  }

  public openDialog(post: IPost): void {
    this.dialog.open(EditPostDialogComponent, { data: { post } });
  }

  public removePost(post: IPost) {
    this.store.dispatch(RemovePost({ post }));
  }
}
