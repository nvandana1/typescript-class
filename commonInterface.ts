export interface Walk {
  walk(name: string);
}

export interface Eat {
  eat(name: string);
}

export interface Sleep {
  sleep(name: string);
}

export interface PersonalData{
  creature:string;
  name:string;
  age:number;
  gender:string;
}