import { createAction, props } from '@ngrx/store';

import { FavoriteCard } from '../models/favorite.models';

export enum FavoriteActionsType {
  AddCard = '[fav] addCard',
  RemoveCard = '[fav] removeCard'
}

export const favoriteAddCardAction = createAction(
  FavoriteActionsType.AddCard,
  props<{ card: FavoriteCard }>()
);

export const favoriteRemoveCardAction = createAction(
  FavoriteActionsType.RemoveCard,
  props<{ id: string }>()
);
