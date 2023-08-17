import { PersonalData } from './commonInterface';
import { Human } from './Human';

const activities = new Human('Vandana');
const person: PersonalData = { name: 'Vandana', age: 23, gender: 'Female' };
activities.details(person);
activities.activities();
