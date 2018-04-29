import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';

@Injectable()  //it makes this object injectable
export class DishService {

  constructor() { }
  
  getDishes(): Dish[] {
	  return DISHES;
  }
  
  getDish(id: number): Dish{
	  return DISHES.filter((dish) => (dish.id === id))[0]; //Filter the DISHES array
  }
  
  getFeaturedDish(): Dish{
	  return DISHES.filter((dish) => (dish.featured))[0]; //Featured is boolean
  }

}
