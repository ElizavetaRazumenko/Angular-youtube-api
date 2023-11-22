import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { favoriteRemoveCardAction } from 'src/app/redux/actions/favorite.actions';
import { FavoriteCard } from 'src/app/redux/models/favorite.models';

@Component({
  selector: 'app-favorite-cards',
  templateUrl: './favorite-cards.component.html',
  styleUrls: ['./favorite-cards.component.scss']
})
export class FavoriteCardsComponent {
  @Input() public itemCard!: FavoriteCard;
  public date = new Date();

  constructor(private readonly store: Store) {}

  public removeFromFavorites() {
    this.store.dispatch(
      favoriteRemoveCardAction({
        id: this.itemCard.id
      })
    );
  }
}
