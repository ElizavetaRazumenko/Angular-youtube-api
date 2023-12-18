import { AdminState } from '../models/admin.models';
import { selectAdminCard } from './admin.selectors';

describe('selectAdminCard selector', () => {
  const mockAdminState: AdminState = {
    admin: [
      {
        title: 'title1',
        description: 'description1',
        img: 'img1',
        link: 'link1',
        date: 'date1',
        tags: ['tag1', 'tag2'],
        id: '1111'
      },
      {
        title: 'title2',
        description: 'description2',
        img: 'img2',
        link: 'link2',
        date: 'date2',
        tags: ['tag1', 'tag2'],
        id: '2222'
      }
    ]
  };

  it('should return admin cards from state', () => {
    const selected = selectAdminCard.projector(mockAdminState);
    expect(selected).toEqual(mockAdminState.admin);
  });

  it('should return an empty array if admin state is empty', () => {
    const emptyState: AdminState = {
      admin: []
    };
    const selected = selectAdminCard.projector(emptyState);
    expect(selected).toEqual([]);
  });
});
