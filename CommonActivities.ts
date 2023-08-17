import { Eat, Sleep, Walk } from './commonInterface';
export class CommonActivities implements Walk, Eat, Sleep {
  constructor(protected name: string) {}
  walk(name: string) {
    console.log(name, ' is walking');
  }
  eat(name: string) {
    console.log(name, ' is eating');
  }
  sleep(name: string) {
    console.log(name, ' is sleeping');
  }
}
