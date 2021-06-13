import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { IPost } from '../../../models';
import { UpdatePost } from '../../../store';

@Component({
  selector: 'update-post-dialog',
  styleUrls: ['./update-post-dialog.component.scss'],
  templateUrl: 'update-post-dialog.component.html',
})
export class EditPostDialogComponent {
  public updatePostForm = new FormGroup({
    title: new FormControl(this.data.post.title, [Validators.required]),
    body: new FormControl(this.data.post.body, [Validators.required]),
  });

  public controls = {
    title: this.updatePostForm.get('title') as FormControl,
    body: this.updatePostForm.get('body') as FormControl,
  };
  constructor(
    public store: Store,
    public dialogRef: MatDialogRef<EditPostDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { post: IPost }
  ) {}

  public onNoClick(): void {
    this.dialogRef.close();
  }

  public updatePost(): void {
    const { title, body } = this.updatePostForm.value;

    this.store.dispatch(
      UpdatePost({
        id: this.data.post.id,
        title,
        body,
      })
    );

    this.dialogRef.close();
  }
}
