import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchFormService } from 'src/app/core/services/search-form.service';
import Item from 'src/app/search-responce/search-item.model';
import VideoItems from 'src/app/search-responce/search-response.model';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {
  public videos$: Observable<VideoItems> = this.searchFormService.videos$;
  public items!: Item[];

  constructor(private searchFormService: SearchFormService) {
    this.searchFormService.videos$.subscribe(
      (videos) => this.items === videos.items
    );
  }
}
