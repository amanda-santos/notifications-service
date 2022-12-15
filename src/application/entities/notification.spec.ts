import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
  it('should be able to create a notification content', () => {
    const content = new Notification({
      content: new Content('A new notification'),
      category: 'social',
      recipientId: 'example-recipient-id',
    });

    expect(content).toBeTruthy();
  });
});
