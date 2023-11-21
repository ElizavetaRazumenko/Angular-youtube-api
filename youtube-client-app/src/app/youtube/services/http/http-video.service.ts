/* eslint-disable prettier/prettier */
import {
  HttpClient,
  HttpParams
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, switchMap } from 'rxjs';
import Item from 'src/app/search-responce/search-item.model';
import VideoItems, {
  SearchVideoResponse
} from 'src/app/search-responce/search-response.model';

@Injectable({
  providedIn: 'root'
})
export class HttpVideoService {
  private searchURL = 'search?';
  private searchVideosURL = 'videos?';
  constructor(private http: HttpClient) {}

  public getVideos(query: string, maxResults = 20) {
    const params: HttpParams = new HttpParams()
      .set('type', 'video')
      .set('part', 'snippet')
      .set('maxResults', maxResults)
      .set('q', query);
      
    return this.http
      .get<SearchVideoResponse>(`${this.searchURL}`, { params })
      .pipe(
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

  getItemById(id: string): Observable<Item[]> {
    const params = new HttpParams()
      .set('part', 'snippet,statistics')
      .set('id', id);
    return this.http.get<VideoItems>(`${this.searchVideosURL}`, { params })
      .pipe(
        map((response) => response.items),
      );
  }
}
