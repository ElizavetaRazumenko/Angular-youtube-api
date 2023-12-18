import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { mainSearchAction } from 'src/app/redux/actions/main.actions';
import { MainCard } from 'src/app/redux/models/main.models';
import { selectMainCard } from 'src/app/redux/selectors/main.selectors';
import { MainPageService } from 'src/app/youtube/services/main-page/main-page.service';

import {
  MIN_INPUT_VALUE_LENGTH,
  MIN_SUBMIT_FORM_VALUE_LENGTH
} from '../../constants/constants';
import { SearchFormService } from '../../services/search-form.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent {
  public cards$: Observable<MainCard[]> = this.store.select(selectMainCard);

  constructor(
    private searchFormService: SearchFormService,
    private mainPageService: MainPageService,
    private readonly store: Store
  ) {}

  public changeInputValue(query: string) {
    localStorage.setItem('Query', query);
    this.store.dispatch(
      mainSearchAction({ query, queryLength: MIN_INPUT_VALUE_LENGTH })
    );
    this.mainPageService.onTheFormSubmit();
  }

  public sendFormInfo(query: string) {
    localStorage.setItem('Query', query);
    this.store.dispatch(
      mainSearchAction({ query, queryLength: MIN_SUBMIT_FORM_VALUE_LENGTH })
    );
    this.mainPageService.onTheFormSubmit();
  }
}
