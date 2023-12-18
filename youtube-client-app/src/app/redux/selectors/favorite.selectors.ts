import { createFeatureSelector, createSelector } from '@ngrx/store';

import { FavoriteCard, FavoriteState } from '../models/favorite.models';
import { favoriteNode } from '../reducers/favorite.reducer';

export const selectFavoriteFeature =
  createFeatureSelector<FavoriteState>(favoriteNode);

export const selectFavoriteCard = createSelector(
  selectFavoriteFeature,
  (state: FavoriteState): FavoriteCard[] => state.favorite
);
