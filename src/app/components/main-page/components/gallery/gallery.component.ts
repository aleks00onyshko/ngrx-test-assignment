import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IPhoto } from '../../models';
import { IDataState } from '../../store/reducer';
import { photos } from '../../store/selectors/data.selectors';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent {
  public photos$: Observable<IPhoto[]> = this.store.select(photos);

  constructor(private store: Store<IDataState>) {}
}
