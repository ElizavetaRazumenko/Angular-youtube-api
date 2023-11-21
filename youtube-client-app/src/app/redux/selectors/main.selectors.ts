import { createFeatureSelector, createSelector } from '@ngrx/store';

import { MainCard, MainState } from '../models/main.models';
import { mainNode } from '../reducers/main.reducer';

export const selectMainFeature = createFeatureSelector<MainState>(mainNode);

export const selectMainCard = createSelector(
  selectMainFeature,
  (state: MainState): MainCard[] => state.main
);
