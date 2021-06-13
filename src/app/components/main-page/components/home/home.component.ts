import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IPhoto, IPost } from '../../models';
import { IDataState, photos, posts } from '../../store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public photos$: Observable<IPhoto[]> = this.store
    .select(photos)
    .pipe(map((photos: IPhoto[]) => photos.slice(0, 10)));
  public posts$: Observable<IPost[]> = this.store
    .select(posts)
    .pipe(map((posts: IPost[]) => posts.slice(0, 10)));

  constructor(private store: Store<IDataState>) {}
}
