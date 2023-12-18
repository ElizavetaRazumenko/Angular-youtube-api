import { Pipe, PipeTransform } from '@angular/core';
import { MainCard } from 'src/app/redux/models/main.models';

@Pipe({
  name: 'filterData'
})
export class FilterDataPipe implements PipeTransform {
  private sortingCards: MainCard[] = [];
  public transform = (
    cards: MainCard[],
    isSortingTurn: boolean,
    isSortFromLargestToSmallest: boolean
  ) => {
    if (!isSortingTurn) return cards;
    this.sortingCards = Array.from(cards);
    if (isSortFromLargestToSmallest) {
      return this.sortingCards.sort(
        (cardA, cardB) =>
          new Date(cardA.publishedAt).getTime() -
          new Date(cardB.publishedAt).getTime()
      );
    }
    return this.sortingCards.sort(
      (cardA, cardB) =>
        new Date(cardB.publishedAt).getTime() -
        new Date(cardA.publishedAt).getTime()
    );
  };
}
