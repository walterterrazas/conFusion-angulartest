import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise'; //RxJS operators
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';

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
  
  
  //PROMISE AND OBSERVABLE
  /*getDishes(): Promise<Dish[]> {
	  //return Promise.resolve(DISHES); //It works if you have the result immediatly
	  
	  //return new Promise(resolve => {
		//Simulate server latency
		//setTimeout(() => resolve(DISHES), 2000);
	  //});
	  
	  return Observable.of(DISHES).delay(2000).toPromise();	//RxJS
  }
  
  getDish(id: number): Promise<Dish>{
	  //return Promise.resolve(DISHES.filter((dish) => (dish.id === id))[0]); 
	  
	  //return new Promise(resolve => {
		//Simulate server latency
		//setTimeout(() => resolve(DISHES.filter((dish) => (dish.id === id))[0]), 2000);
	  //});
	  
	  return Observable.of(DISHES.filter((dish) => (dish.id === id))[0]).delay(2000).toPromise();	//RxJS
  }
  
  getFeaturedDish(): Promise<Dish>{
	  //return Promise.resolve(DISHES.filter((dish) => (dish.featured))[0]); 
	  
	  //return new Promise(resolve => {
		//Simulate server latency
		//setTimeout(() => resolve(DISHES.filter((dish) => (dish.featured))[0]), 2000);
	  //});
	  
	  return Observable.of(DISHES.filter((dish) => (dish.featured))[0]).delay(2000).toPromise();	//RxJS
  }*/
  
  //Just observables
  getDishes(): Observable<Dish[]> { 
	  return Observable.of(DISHES).delay(2000);
  }
  
  getDish(id: number): Observable<Dish>{
	  return Observable.of(DISHES.filter((dish) => (dish.id === id))[0]).delay(2000);
  }
  
  getFeaturedDish(): Observable<Dish>{
	  return Observable.of(DISHES.filter((dish) => (dish.featured))[0]).delay(2000);
  }
  
  getDishIds(): Observable<number[]>{
	  return Observable.of(DISHES.map(dish => dish.id)).delay(2000);
  }

}
