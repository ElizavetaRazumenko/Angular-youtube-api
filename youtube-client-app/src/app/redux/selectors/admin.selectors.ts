import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AdminCard, AdminState } from '../models/admin.models';
import { adminNode } from '../reducers/admin.reducer';

export const selectAdminFeature = createFeatureSelector<AdminState>(adminNode);

export const selectAdminCard = createSelector(
  selectAdminFeature,
  (state: AdminState): AdminCard[] => state.admin
);
