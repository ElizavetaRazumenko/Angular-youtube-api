import { Pipe, PipeTransform } from '@angular/core';
import Item from 'src/app/search-responce/search-item.model';

@Pipe({
  name: 'filterViews'
})
export class FilterViewsPipe implements PipeTransform {
  sortingCards: Item[] = [];
  public transform = (
    cards: Item[],
    isSortingTurn: boolean,
    isSortFromLargestToSmallest: boolean
  ) => {
    if (!isSortingTurn) return cards;
    this.sortingCards = Array.from(cards);
    if (isSortFromLargestToSmallest) {
      return this.sortingCards.sort(
        (cardA, cardB) =>
          +cardA.statistics.viewCount - +cardB.statistics.viewCount
      );
    }
    return this.sortingCards.sort(
      (cardA, cardB) =>
        +cardB.statistics.viewCount - +cardA.statistics.viewCount
    );
  };
}
