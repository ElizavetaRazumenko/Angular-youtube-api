/* eslint-disable @typescript-eslint/no-explicit-any */
import * as FavoriteActions from '../../actions/favorite.actions';
import { favoriteReducer, initialState } from '../favorite.reducer';

describe('Favorite Reducer', () => {
  it('should add a card to the favorite list', () => {
    const cardToAdd = {
      id: '1',
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
    const newState = favoriteReducer(
      initialState,
      FavoriteActions.favoriteAddCardAction({ card: cardToAdd })
    );

    expect(newState.favorite).toEqual([cardToAdd]);
  });

  it('should remove a card from the favorite list', () => {
    const initialStateWithCards = {
      favorite: [
        {
          id: '1',
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
        },
        {
          id: '2',
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
        },
        {
          id: '3',
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
        }
      ]
    };

    const cardToRemove = {
      id: '2',
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
    const newState = favoriteReducer(
      initialStateWithCards,
      FavoriteActions.favoriteRemoveCardAction({ id: cardToRemove.id })
    );

    expect(newState.favorite).toEqual([
      {
        id: '1',
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
      },
      {
        id: '3',
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
      }
    ]);
  });

  it('should return the initial state for an unknown action', () => {
    const unknownAction = { type: 'UNKNOWN_ACTION' } as any;
    const newState = favoriteReducer(initialState, unknownAction);

    expect(newState).toBe(initialState);
  });
});
