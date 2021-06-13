import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IDataState } from '../reducer';

export const dataReducerSelector = createFeatureSelector<IDataState>(
  'dataReducer'
);

export const photos = createSelector(
  dataReducerSelector,
  (state: IDataState) => state.photos
);

export const posts = createSelector(
  dataReducerSelector,
  (state: IDataState) => state.posts
);

export const loading = createSelector(
  dataReducerSelector,
  (state: IDataState) => state.loading
);
