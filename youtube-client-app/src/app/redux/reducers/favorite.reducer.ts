import { createReducer, on } from '@ngrx/store';

import * as FavoriteActions from '../actions/favorite.actions';
import { FavoriteState } from '../models/favorite.models';

export const favoriteNode = 'favorite';
export const initialState: FavoriteState = {
  favorite: []
};

export const favoriteReducer = createReducer(
  initialState,
  on(
    FavoriteActions.favoriteAddCardAction,
    (state: FavoriteState, { card }): FavoriteState => ({
      ...state,
      favorite: [...state.favorite, card]
    })
  ),
  on(
    FavoriteActions.favoriteRemoveCardAction,
    (state: FavoriteState, { id }): FavoriteState => ({
      ...state,
      favorite: [...state.favorite.filter((card) => card.id !== id)]
    })
  )
);
