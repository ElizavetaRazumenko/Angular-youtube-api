import { Pipe, PipeTransform } from '@angular/core';
import Item from 'src/app/search-responce/search-item.model';

@Pipe({
  name: 'filterData'
})
export class FilterDataPipe implements PipeTransform {
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
          new Date(cardA.snippet.publishedAt).getTime() -
          new Date(cardB.snippet.publishedAt).getTime()
      );
    }
    return this.sortingCards.sort(
      (cardA, cardB) =>
        new Date(cardB.snippet.publishedAt).getTime() -
        new Date(cardA.snippet.publishedAt).getTime()
    );
  };
}
