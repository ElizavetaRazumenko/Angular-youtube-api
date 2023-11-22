import { createAction, props } from '@ngrx/store';

import { MainCard } from '../models/main.models';

export enum MainActionsType {
  AddCard = '[main] addCard',
  AddCardArr = '[main] addCardArr',
  ClearCards = '[main] clearCards',
  SearchQuery = '[main] search query',
  SearchOnPageQuery = '[main] search on page query'
}

export const mainAddCardAction = createAction(
  MainActionsType.AddCard,
  props<{ card: MainCard }>()
);

export const mainClearCardsAction = createAction(MainActionsType.ClearCards);

export const mainSearchAction = createAction(
  MainActionsType.SearchQuery,
  props<{ query: string; queryLength: number }>()
);

export const mainSearchOnPageAction = createAction(
  MainActionsType.SearchOnPageQuery,
  props<{
    query: string;
    tokenName: string;
    token: string;
  }>()
);

export const mainAddCardArrAction = createAction(
  MainActionsType.AddCardArr,
  props<{ cards: MainCard[] }>()
);
