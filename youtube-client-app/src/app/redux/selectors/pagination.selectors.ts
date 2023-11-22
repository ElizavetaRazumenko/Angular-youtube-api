import { createFeatureSelector, createSelector } from '@ngrx/store';

import { PaginationInfo, PaginationState } from '../models/pagination.models';
import { paginationNode } from '../reducers/pagination.reducer';

export const selectPaginationFeature =
  createFeatureSelector<PaginationState>(paginationNode);

export const selectPaginationInfo = createSelector(
  selectPaginationFeature,
  (state: PaginationState): PaginationInfo => state.pagination
);
