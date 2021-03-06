import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise'; //RxJS operators
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';

@Injectable()
export class PromotionService {

  constructor() { }
	
  /*getPromotions(): Promotion[] {
	  return PROMOTIONS;
  }
  
  getPromotion(id: number): Promotion{
	  return PROMOTIONS.filter((promo) => (promo.id === id))[0]; //Filter the DISHES array
  }
  
  getFeaturedPromotion(): Promotion{
	  return PROMOTIONS.filter((promo) => (promo.featured))[0]; //Featured is boolean
  }*/
  
  //PROMISE AND OBSERVABLE
  /*getPromotions(): Promise<Promotion[]> {
	  //return Promise.resolve(PROMOTIONS);
	  
	  //return new Promise(resolve => {
		//Simulate server latency
		//setTimeout(() => resolve(PROMOTIONS), 2000);
	  //});
	  
	  return Observable.of(PROMOTIONS).delay(2000).toPromise();	//RxJS
  }
  
  getPromotion(id: number): Promise<Promotion>{
	  //return Promise.resolve(PROMOTIONS.filter((promo) => (promo.id === id))[0]); //Filter the DISHES array
	  
	  //return new Promise(resolve => {
		//Simulate server latency
		//setTimeout(() => resolve(PROMOTIONS.filter((promo) => (promo.id === id))[0]), 2000);
	  //});
	  
	  return Observable.of(PROMOTIONS.filter((promo) => (promo.id === id))[0]).delay(2000).toPromise();	//RxJS
  }
  
  getFeaturedPromotion(): Promise<Promotion>{
	  //return Promise.resolve(PROMOTIONS.filter((promo) => (promo.featured))[0]); //Featured is boolean
	  
	  //return new Promise(resolve => {
		//Simulate server latency
		//setTimeout(() => resolve(PROMOTIONS.filter((promo) => (promo.featured))[0]), 2000);
	  //});
	  
	  return Observable.of(PROMOTIONS.filter((promo) => (promo.featured))[0]).delay(2000).toPromise();	//RxJS
  }*/
  
  getPromotions(): Observable<Promotion[]> {
	  return Observable.of(PROMOTIONS).delay(2000);
  }
  
  getPromotion(id: number): Observable<Promotion>{
	  return Observable.of(PROMOTIONS.filter((promo) => (promo.id === id))[0]).delay(2000);
  }
  
  getFeaturedPromotion(): Observable<Promotion>{
	  return Observable.of(PROMOTIONS.filter((promo) => (promo.featured))[0]).delay(2000);
  }
}
