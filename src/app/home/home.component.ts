import { Component, OnInit } from '@angular/core';

import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	dish: Dish;
	promotion: Promotion;
	
  constructor(private dishservice: DishService, private promotionservice: PromotionService) { }

  ngOnInit() {
	  //this.dish = this.dishservice.getFeaturedDish();
	  //this.promotion = this.promotionservice.getFeaturedPromotion();
	  
	  //Promise
	  //this.dishservice.getFeaturedDish().then(dish => this.dish = dish);
	  //this.promotionservice.getFeaturedPromotion().then(promotion => this.promotion = promotion);
	  
	  //Observable
	  this.dishservice.getFeaturedDish().subscribe(dish => this.dish = dish);
	  this.promotionservice.getFeaturedPromotion().subscribe(promotion => this.promotion = promotion);
  }

}
