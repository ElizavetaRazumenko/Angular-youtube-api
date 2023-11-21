import { adminNode } from '../reducers/admin.reducer';
import { favoriteNode } from '../reducers/favorite.reducer';
import { mainNode } from '../reducers/main.reducer';
import { AdminState } from './admin.models';
import { FavoriteState } from './favorite.models';
import { MainState } from './main.models';

export interface State {
  [adminNode]: AdminState;
  [mainNode]: MainState;
  [favoriteNode]: FavoriteState;
}
