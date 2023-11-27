import { Pipe, PipeTransform } from '@angular/core';
import { MainCard } from 'src/app/redux/models/main.models';

@Pipe({
  name: 'filterWords'
})
export class FilterWordsPipe implements PipeTransform {
  private sortingCards: MainCard[] = [];
  public transform = (cards: MainCard[], value: string) => {
    this.sortingCards = Array.from(cards);
    return this.sortingCards.filter((item) => {
      const channelTitle = item.channelTitle.toLowerCase();
      return channelTitle.includes(value.toLowerCase());
    });
  };
}
