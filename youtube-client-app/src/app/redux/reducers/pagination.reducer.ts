import { createReducer, on } from '@ngrx/store';

import * as PaginationActions from '../actions/pagination.actions';
import { PaginationState } from '../models/pagination.models';

export const paginationNode = 'pagination';
export const initialState: PaginationState = {
  pagination: {
    nextPageToken: '',
    prevPageToken: '',
    page: 1
  }
};

export const paginationReducer = createReducer(
  initialState,
  on(
    PaginationActions.paginationAddInfoAction,
    (state: PaginationState, { info }): PaginationState => ({
      ...state,
      pagination: {
        ...state.pagination,
        ...info
      }
    })
  ),

  on(
    PaginationActions.paginationChangePageAction,
    (state: PaginationState, { page }): PaginationState => ({
      ...state,
      pagination: {
        ...state.pagination,
        page
      }
    })
  )
);
