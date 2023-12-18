/* eslint-disable @typescript-eslint/no-explicit-any */
import * as AdminActions from '../../actions/admin.actions';
import { AdminState } from '../../models/admin.models';
import { adminReducer, initialState } from '../admin.reducer';

describe('Admin Reducer', () => {
  it('should handle adminAddCardAction correctly', () => {
    const cardData = {
      title: 'title',
      description: 'description',
      img: 'img',
      link: 'link',
      date: '2023-06-11',
      tags: ['tag1', 'tag2'],
      id: '1111'
    };
    const action = AdminActions.adminAddCardAction({ card: cardData });
    const state = adminReducer(initialState, action);

    expect(state).toEqual({
      admin: [cardData]
    } as AdminState);
  });

  it('should handle adminRemoveCardAction correctly', () => {
    const initialStateWithCard = {
      admin: [
        {
          title: 'title',
          description: 'description',
          img: 'img',
          link: 'link',
          date: '2023-06-11',
          tags: ['tag1', 'tag2'],
          id: '1'
        },
        {
          title: 'title',
          description: 'description',
          img: 'img',
          link: 'link',
          date: '2023-06-11',
          tags: ['tag1', 'tag2'],
          id: '2'
        }
      ]
    } as AdminState;

    const action = AdminActions.adminRemoveCardAction({ id: '1' });
    const state = adminReducer(initialStateWithCard, action);

    expect(state).toEqual({
      admin: [
        {
          id: '2',
          title: 'title',
          description: 'description',
          img: 'img',
          link: 'link',
          date: '2023-06-11',
          tags: ['tag1', 'tag2']
        }
      ]
    } as AdminState);
  });

  it('should return the initial state for an unknown action', () => {
    const unknownAction = { type: 'Unknown Action' };
    const state = adminReducer(initialState, unknownAction as any);

    expect(state).toBe(initialState);
  });
});
