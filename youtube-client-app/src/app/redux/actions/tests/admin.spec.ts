import { adminAddCardAction, adminRemoveCardAction } from '../admin.actions';

describe('Admin Actions', () => {
  it('should create an adminAddCardAction', () => {
    const cardData = {
      title: 'title',
      description: 'description',
      img: 'img',
      link: 'link',
      date: '2023-06-11',
      tags: ['tag1', 'tag2'],
      id: '1111'
    };
    const action = adminAddCardAction({ card: cardData });

    expect(action.type).toBe('[admin] card');
    expect(action.card).toEqual(cardData);
  });

  it('should create an adminRemoveCardAction', () => {
    const id = '1111';
    const action = adminRemoveCardAction({ id });

    expect(action.type).toBe('[admin] remove card');
    expect(action.id).toBe(id);
  });
});
