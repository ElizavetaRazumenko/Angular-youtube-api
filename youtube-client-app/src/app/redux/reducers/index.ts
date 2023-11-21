import { ActionReducerMap } from '@ngrx/store';

import { State } from '../models/state.models';
import { adminNode, adminReducer } from './admin.reducer';
import { favoriteNode, favoriteReducer } from './favorite.reducer';
import { mainNode, mainReducer } from './main.reducer';

export const reducers: ActionReducerMap<State> = {
  [adminNode]: adminReducer,
  [mainNode]: mainReducer,
  [favoriteNode]: favoriteReducer
};
