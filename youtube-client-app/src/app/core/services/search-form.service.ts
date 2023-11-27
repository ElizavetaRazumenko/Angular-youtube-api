import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  BehaviorSubject,
  debounceTime,
  filter,
  Observable,
  switchMap
} from 'rxjs';
import VideoItems from 'src/app/search-responce/search-response.model';

import { HttpVideoService } from '../../youtube/services/http/http-video.service';

interface IStateQuery {
  value: string;
  length: number;
}

@Injectable({
  providedIn: 'root'
})
export class SearchFormService {
  public stateQuery: BehaviorSubject<IStateQuery> = new BehaviorSubject({
    value: '',
    length: 0
  });

  public videos$: Observable<VideoItems> = this.stateQuery.pipe(
    filter((query) => query.value.length > query.length),
    debounceTime(500),
    switchMap((query) => this.httpVideoService.getVideos(query.value))
  );

  constructor(
    private httpVideoService: HttpVideoService,
    private readonly store: Store
  ) {}

  public changeQuery(query: string, length: number) {
    this.stateQuery.next({ value: query, length });
  }
}
