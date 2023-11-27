import { createAction, props } from '@ngrx/store';

import { AdminCardAddProps } from '../models/admin.models';

export enum AdminActionsType {
  Card = '[admin] card',
  RemoveCard = '[admin] remove card'
}

export const adminAddCardAction = createAction(
  AdminActionsType.Card,
  props<{ card: AdminCardAddProps }>()
);

export const adminRemoveCardAction = createAction(
  AdminActionsType.RemoveCard,
  props<{
    id: string;
  }>()
);
