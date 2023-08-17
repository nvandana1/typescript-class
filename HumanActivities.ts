import { CommonActivities } from './CommonActivities';
export class HumanActivities extends CommonActivities {
  constructor(name: string) {
    super(name);
  }
  work(name: string) {
    console.log(name, ' is working');
  }
}