import { createReducer, on } from '@ngrx/store';

import * as AdminActions from '../actions/admin.actions';
import { AdminState } from '../models/admin.models';

export const adminNode = 'admin';
export const initialState: AdminState = {
  admin: []
};

export const adminReducer = createReducer(
  initialState,
  on(
    AdminActions.adminAddCardAction,
    (state: AdminState, { card }): AdminState => ({
      ...state,
      admin: [...state.admin, card]
    })
  ),
  on(
    AdminActions.adminRemoveCardAction,
    (state: AdminState, { id }): AdminState => ({
      ...state,
      admin: [...state.admin.filter((item) => item.id !== id)]
    })
  )
);
