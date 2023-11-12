import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Item from 'src/app/search-responce/search-item.model';

import { DetailsService } from '../../services/details-page/details.service';

@Component({
  selector: 'app-search-results-item',
  templateUrl: './search-results-item.component.html',
  styleUrls: ['./search-results-item.component.scss']
})
export class SearchResultsItemComponent implements OnInit {
  @Input() public cardInfo!: Item;
  id!: string;
  link!: string;
  constructor(
    public detailsService: DetailsService,
    private router: Router
  ) {}
  ngOnInit() {
    this.id = this.cardInfo.id;
    this.link = `/details/${this.id}`;
  }
  public setVideoData() {
    this.router.navigate([this.link]);
  }
}
