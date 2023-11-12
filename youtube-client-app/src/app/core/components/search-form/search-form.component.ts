import { Component } from '@angular/core';
import { MainPageService } from 'src/app/youtube/services/main-page/main-page.service';

import { SearchFormService } from '../../services/search-form.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent {
  public videos$ = this.searchFormService.videos$;

  constructor(
    private searchFormService: SearchFormService,
    public mainPageService: MainPageService
  ) {}

  public changeInputValue(query: string) {
    this.searchFormService.changeQuery(query, 3);
    this.mainPageService.onFormSubmit();
  }

  public sendFormInfo(query: string) {
    this.searchFormService.changeQuery(query, 0);
    this.mainPageService.onFormSubmit();
  }
}
