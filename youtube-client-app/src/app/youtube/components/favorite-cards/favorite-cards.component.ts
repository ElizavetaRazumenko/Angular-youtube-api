import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { adminRemoveCardAction } from 'src/app/redux/actions/admin.actions';
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

  public deleteCard(id: string) {
    this.store.dispatch(
      adminRemoveCardAction({
        id
      })
    );
  }
}
