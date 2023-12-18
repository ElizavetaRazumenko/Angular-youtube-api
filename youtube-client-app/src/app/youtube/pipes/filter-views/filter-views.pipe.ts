import { Pipe, PipeTransform } from '@angular/core';
import { MainCard } from 'src/app/redux/models/main.models';

@Pipe({
  name: 'filterViews'
})
export class FilterViewsPipe implements PipeTransform {
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
        (cardA, cardB) => +cardA.viewCount - +cardB.viewCount
      );
    }
    return this.sortingCards.sort(
      (cardA, cardB) => +cardB.viewCount - +cardA.viewCount
    );
  };
}
