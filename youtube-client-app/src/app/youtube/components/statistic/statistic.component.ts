import { Component, Input } from '@angular/core';
import { Statistics } from 'src/app/search-responce/search-item.model';

import { DetailsService } from '../../services/details-page/details.service';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.scss']
})
export class StatisticComponent {
  @Input() statistic!: Statistics;

  constructor(public service: DetailsService) {}
}
