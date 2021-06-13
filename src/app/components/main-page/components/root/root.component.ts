import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loading, IDataState, GetPhotos, GetPosts } from '../../store';

@Component({
  selector: 'app-main-page-root',
  templateUrl: 'root.component.html',
  styleUrls: ['./root.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainPageRootComponent {
  public loading$: Observable<boolean> = this.store.select(loading);

  constructor(private store: Store<IDataState>) {
    this.store.dispatch(GetPhotos());
    this.store.dispatch(GetPosts());
  }
}
