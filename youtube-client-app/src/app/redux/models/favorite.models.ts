import { MainCard } from './main.models';

export type FavoriteCard = MainCard;

export interface FavoriteState {
  favorite: FavoriteCard[];
}
