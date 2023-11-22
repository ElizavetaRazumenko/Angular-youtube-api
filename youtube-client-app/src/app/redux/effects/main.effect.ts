/* eslint-disable class-methods-use-this */
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { debounceTime, filter, map, switchMap } from 'rxjs';
import VideoItems from 'src/app/search-responce/search-response.model';
import { HttpVideoService } from 'src/app/youtube/services/http/http-video.service';

import * as MainActions from '../actions/main.actions';
import { MainCard } from '../models/main.models';

@Injectable()
export class MainEffects {
  constructor(
    private actions$: Actions,
    private httpVideoService: HttpVideoService
  ) {}

  getVideoCards$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(MainActions.mainSearchAction),
      filter(({ query, queryLength }) => query.length > queryLength),
      debounceTime(500),
      switchMap((action) => this.httpVideoService.getVideos(action.query)),
      map((videoItems) =>
        MainActions.mainAddCardArrAction({
          cards: this.convertVideoItemsToCards(videoItems)
        })
      )
    );
  });

  getVideoCardsOnPage$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(MainActions.mainSearchOnPageAction),
      switchMap((action) =>
        this.httpVideoService.getVideosOnPage(
          action.query,
          action.tokenName,
          action.token
        )
      ),
      map((videoItems) =>
        MainActions.mainAddCardArrAction({
          cards: this.convertVideoItemsToCards(videoItems)
        })
      )
    );
  });

  private convertVideoItemsToCards(videoItems: VideoItems): MainCard[] {
    return videoItems.items.map((card) => ({
      id: card.id,
      publishedAt: card.snippet.publishedAt,
      title: card.snippet.title,
      description: card.snippet.description,
      defaultURL: card.snippet.thumbnails.default.url,
      highURL: card.snippet.thumbnails.high.url,
      channelTitle: card.snippet.channelTitle,
      viewCount: card.statistics.viewCount,
      likeCount: card.statistics.likeCount,
      favoriteCount: card.statistics.favoriteCount,
      commentCount: card.statistics.commentCount
    }));
  }
}
