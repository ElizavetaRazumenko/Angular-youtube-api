import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { adminRemoveCardAction } from 'src/app/redux/actions/admin.actions';
import { AdminCard } from 'src/app/redux/models/admin.models';

@Component({
  selector: 'app-admin-cards',
  templateUrl: './admin-cards.component.html',
  styleUrls: ['./admin-cards.component.scss']
})
export class AdminCardsComponent {
  @Input() public cardInfo!: AdminCard;
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
