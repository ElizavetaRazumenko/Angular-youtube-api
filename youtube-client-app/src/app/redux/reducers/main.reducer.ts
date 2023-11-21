/* eslint-disable @ngrx/on-function-explicit-return-type */
import { createReducer, on } from '@ngrx/store';

import * as MainActions from '../actions/main.actions';
import { MainState } from '../models/main.models';

export const mainNode = 'main';
export const initialState: MainState = {
  main: []
};

export const mainReducer = createReducer(
  initialState,
  on(MainActions.mainAddCardAction, (state: MainState, { card }) => ({
    ...state,
    main: [...state.main, card]
  })),
  on(MainActions.mainAddCardArrAction, (state: MainState, { cards }) => ({
    ...state,
    main: [...state.main, ...cards]
  })),
  on(MainActions.mainClearCardsAction, (state: MainState) => ({
    ...state,
    main: []
  }))
);
