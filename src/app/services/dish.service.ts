import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';

@Injectable()  //it makes this object injectable
export class DishService {

  constructor() { }
  
  getDishes(): Dish[] {
	  return DISHES;
  }

}
