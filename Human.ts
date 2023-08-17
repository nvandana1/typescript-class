import { PersonalData } from './commonInterface';
import { HumanActivities } from './HumanActivities';

export class Human extends HumanActivities {
  activities() {
    this.walk(this.name);
    this.eat(this.name);
    this.sleep(this.name);
    this.work(this.name);
  }
  details(data: PersonalData) {
    console.log(`creature is ${data.creature}`)
    console.log(`name is ${this.name}`);
    console.log(`age is ${data.age}`);
    console.log(`gender is ${data.gender}`);
  }
}
