import { Eat, Sleep, Walk } from './commonInterface';
export class CommonActivities implements Walk, Eat, Sleep {
  constructor(protected name: string) {}
  walk(name: string) {
    console.log(name, ' can walk');
  }
  eat(name: string) {
    console.log(name, ' can eat');
  }
  sleep(name: string) {
    console.log(name, ' can sleep');
  }
}
