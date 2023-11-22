import { createAction, props } from '@ngrx/store';

import { PaginationInfo } from '../models/pagination.models';

export enum PaginationActionsType {
  AddTokens = '[pagination] addTokens',
  ChangePage = '[pagination] changePage'
}

export const paginationAddInfoAction = createAction(
  PaginationActionsType.AddTokens,
  props<{ info: Omit<PaginationInfo, 'page'> }>()
);

export const paginationChangePageAction = createAction(
  PaginationActionsType.ChangePage,
  props<{ page: number }>()
);
