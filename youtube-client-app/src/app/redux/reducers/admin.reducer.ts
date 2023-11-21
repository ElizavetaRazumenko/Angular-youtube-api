/* eslint-disable @ngrx/on-function-explicit-return-type */
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
    (state: AdminState, { title, description, img, link, date, tags }) => ({
      ...state,
      admin: [
        ...state.admin,
        {
          title,
          description,
          img,
          link,
          date,
          tags,
          id: window.crypto.randomUUID()
        }
      ]
    })
  ),
  on(AdminActions.adminRemoveCardAction, (state: AdminState, { id }) => ({
    ...state,
    admin: [...state.admin.filter((item) => item.id !== id)]
  }))
);
