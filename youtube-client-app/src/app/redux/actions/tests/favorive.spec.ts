import {
  favoriteAddCardAction,
  favoriteRemoveCardAction
} from '../favorite.actions';

describe('Favorite Actions', () => {
  it('should create a favoriteAddCardAction', () => {
    const cardData = {
      id: '22222',
      publishedAt: '2005-10-05',
      title: 'title',
      description: 'description',
      defaultURL: 'URL',
      highURL: 'URL',
      channelTitle: 'title',
      viewCount: '1000',
      likeCount: '1000',
      favoriteCount: '1000',
      commentCount: '1000'
    };
    const action = favoriteAddCardAction({ card: cardData });

    expect(action.type).toBe('[fav] addCard');
    expect(action.card).toEqual(cardData);
  });

  it('should create a favoriteRemoveCardAction', () => {
    const id = '22222';
    const action = favoriteRemoveCardAction({ id });

    expect(action.type).toBe('[fav] removeCard');
    expect(action.id).toBe(id);
  });
});
