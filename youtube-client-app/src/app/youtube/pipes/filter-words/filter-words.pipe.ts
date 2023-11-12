import { Pipe, PipeTransform } from '@angular/core';
import Item from 'src/app/search-responce/search-item.model';

@Pipe({
  name: 'filterWords'
})
export class FilterWordsPipe implements PipeTransform {
  sortingCards: Item[] = [];
  public transform = (cards: Item[], value: string) => {
    this.sortingCards = Array.from(cards);
    return this.sortingCards.filter((item) => {
      const channelTitle = item.snippet.channelTitle.toLowerCase();
      return channelTitle.includes(value.toLowerCase());
    });
  };
}
