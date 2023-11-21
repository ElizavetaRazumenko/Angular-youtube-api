import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { favoriteAddCardAction } from 'src/app/redux/actions/favorite.actions';
import { FavoriteCard } from 'src/app/redux/models/favorite.models';
import { MainCard } from 'src/app/redux/models/main.models';
import { selectFavoriteCard } from 'src/app/redux/selectors/favorite.selectors';

import { DetailsService } from '../../services/details-page/details.service';

@Component({
  selector: 'app-search-results-item',
  templateUrl: './search-results-item.component.html',
  styleUrls: ['./search-results-item.component.scss']
})
export class SearchResultsItemComponent implements OnInit {
  cards$: Observable<FavoriteCard[]> = this.store.select(selectFavoriteCard);
  public isCardOnFavorites = false;
  @Input() public cardInfo!: MainCard;
  id!: string;
  link!: string;
  constructor(
    public detailsService: DetailsService,
    private router: Router,
    private readonly store: Store
  ) {}
  ngOnInit() {
    this.id = this.cardInfo.id;
    this.link = `/details/${this.id}`;
    this.cards$.subscribe((cards) => {
      this.isCardOnFavorites = !(
        cards.findIndex((card) => card.id === this.cardInfo.id) === -1
      );
    });
  }

  public addToFavorites() {
    this.store.dispatch(
      favoriteAddCardAction({
        card: this.cardInfo
      })
    );
  }

  public setVideoData() {
    this.router.navigate([this.link]);
  }
}
