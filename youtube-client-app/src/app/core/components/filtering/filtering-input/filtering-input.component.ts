import { Component } from '@angular/core';
import { MainPageService } from 'src/app/youtube/services/main-page/main-page.service';

@Component({
  selector: 'app-filtering-input',
  templateUrl: './filtering-input.component.html',
  styleUrls: ['./filtering-input.component.scss']
})
export class FilteringInputComponent {
  constructor(private service: MainPageService) {}

  getFilterInputValue = (value: string) => {
    this.service.getFilterInputValue(value);
  };
}
