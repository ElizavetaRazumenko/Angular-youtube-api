import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable, switchMap, tap } from 'rxjs';
import { paginationAddInfoAction } from 'src/app/redux/actions/pagination.actions';
import Item from 'src/app/search-responce/search-item.model';
import VideoItems, {
  SearchVideoResponse
} from 'src/app/search-responce/search-response.model';

@Injectable({
  providedIn: 'root'
})
export class HttpVideoService {
  public searchURL = 'search?';
  public searchVideosURL = 'videos?';

  constructor(
    private http: HttpClient,
    private readonly store: Store
  ) {}

  public getVideos(query: string, maxResults = 20) {
    const params: HttpParams = new HttpParams()
      .set('type', 'video')
      .set('part', 'snippet')
      .set('maxResults', maxResults)
      .set('q', query);

    return this.http
      .get<SearchVideoResponse>(`${this.searchURL}`, { params })
      .pipe(
        tap((searchResponse) => this.savePagesToken(searchResponse)),
        map((videoResponse: SearchVideoResponse) => {
          const videoItemsIds: string = videoResponse.items
            .map((items) => items.id.videoId)
            .join(',');
          return videoItemsIds;
        }),
        switchMap((videoItemsIds) => {
          return this.http.get<VideoItems>(
            `${this.searchVideosURL}&id=${videoItemsIds}&part=snippet,statistics`
          );
        })
      );
  }

  public getVideosOnPage(query: string, token: string, maxResults = 20) {
    const params: HttpParams = new HttpParams()
      .set('type', 'video')
      .set('part', 'snippet')
      .set('maxResults', maxResults)
      .set('q', query)
      .set('pageToken', token);

    return this.http
      .get<SearchVideoResponse>(`${this.searchURL}`, { params })
      .pipe(
        tap((searchResponse) => this.savePagesToken(searchResponse)),
        map((videoResponse: SearchVideoResponse) => {
          const videoItemsIds: string = videoResponse.items
            .map((items) => items.id.videoId)
            .join(',');
          return videoItemsIds;
        }),
        switchMap((videoItemsIds) => {
          return this.http.get<VideoItems>(
            `${this.searchVideosURL}&id=${videoItemsIds}&part=snippet,statistics`
          );
        })
      );
  }

  public getItemById(id: string): Observable<Item[]> {
    const params = new HttpParams()
      .set('part', 'snippet,statistics')
      .set('id', id);
    return this.http
      .get<VideoItems>(`${this.searchVideosURL}`, { params })
      .pipe(map((response) => response.items));
  }

  public savePagesToken(searchResponse: SearchVideoResponse) {
    const { nextPageToken, prevPageToken } = searchResponse;
    this.store.dispatch(
      paginationAddInfoAction({
        info: {
          nextPageToken: nextPageToken || '',
          prevPageToken: prevPageToken || ''
        }
      })
    );
  }
}
