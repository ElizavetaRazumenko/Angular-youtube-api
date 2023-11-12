import { Component } from '@angular/core';
import { MainPageService } from 'src/app/youtube/services/main-page/main-page.service';

@Component({
  selector: 'app-sorting-buttons',
  templateUrl: './sorting-buttons.component.html',
  styleUrls: ['./sorting-buttons.component.scss']
})
export class SortingButtonsComponent {
  constructor(private service: MainPageService) {}

  turnOnSortingData = () => {
    this.service.turnOnSortingData();
  };

  turnOnSortingViews = () => {
    this.service.turnOnSortingViews();
  };
}
