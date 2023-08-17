import { Human } from './Human';

const activities = new Human('Vandana');
activities.details({ name: 'Vandana', age: 23, gender: 'Female' });
activities.activities();
