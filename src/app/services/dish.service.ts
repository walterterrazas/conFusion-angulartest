import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';

@Injectable()  //it makes this object injectable
export class DishService {

  constructor() { }
  
  /*getDishes(): Dish[] {
	  return DISHES;
  }
  
  getDish(id: number): Dish{
	  return DISHES.filter((dish) => (dish.id === id))[0]; //Filter the DISHES array
  }
  
  getFeaturedDish(): Dish{
	  return DISHES.filter((dish) => (dish.featured))[0]; //Featured is boolean
  }*/
  
  
  getDishes(): Promise<Dish[]> {
	  return Promise.resolve(DISHES); //It works if you have the result immediatly
  }
  
  getDish(id: number): Promise<Dish>{
	  return Promise.resolve(DISHES.filter((dish) => (dish.id === id))[0]); 
  }
  
  getFeaturedDish(): Promise<Dish>{
	  return Promise.resolve(DISHES.filter((dish) => (dish.featured))[0]); 
  }

}
