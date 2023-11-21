import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FavoriteCard } from 'src/app/redux/models/favorite.models';
import { selectFavoriteCard } from 'src/app/redux/selectors/favorite.selectors';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent {
  cards$: Observable<FavoriteCard[]> = this.store.select(selectFavoriteCard);

  constructor(private readonly store: Store) {}
}
