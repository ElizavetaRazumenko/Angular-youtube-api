import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchFormService } from 'src/app/core/services/search-form.service';
import Item, { Statistics } from 'src/app/search-responce/search-item.model';
import VideoItems from 'src/app/search-responce/search-response.model';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {
  public videos$: Observable<VideoItems> = this.searchFormService.videos$;
  public items!: Item[];
  public imgSrc = '';
  public videoTitle = '';
  public date = '';
  public description = '';
  public statistic: Statistics = {
    viewCount: '0',
    likeCount: '0',
    favoriteCount: '0',
    commentCount: '0'
  };
  public publishDate = '';

  constructor(private searchFormService: SearchFormService) {
    this.searchFormService.videos$.subscribe(
      (videos) => this.items === videos.items
    );
  }

  public setVideoInfo(id: string) {
    console.log(id);
    const currentVideo = this.items.find((item) => item.id === id) as Item;
    this.imgSrc = currentVideo.snippet.thumbnails.high.url;
    this.videoTitle = currentVideo.snippet.title;
    this.date = currentVideo.snippet.publishedAt;
    this.description = currentVideo.snippet.localized.description;
    this.statistic = Object.assign(this.statistic, currentVideo.statistics);
    this.publishDate = currentVideo.snippet.publishedAt;
  }
}
