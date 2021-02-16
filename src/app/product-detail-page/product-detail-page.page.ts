import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-product-detail-page',
  templateUrl: './product-detail-page.page.html',
  styleUrls: ['./product-detail-page.page.scss'],
})
export class ProductDetailPagePage implements OnInit {

  item=null;
  order={quanitity:1};
  orders=[];

  constructor(
    public itemService:ItemService,
    private route:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit() {
    console.log("OnInit");
  	this.route.params.subscribe(
  		param=>{
  			this.item = param;
  			console.log(this.item);
  		}
  	)
  }

  printCategory() {
    if(this.item.category == 0) {
      return "Toy";
    } else if (this.item.category == 1) {
      return "Food";
    } else if (this.item.category == 2) {
      return "Drink";
    } else {
      return "Error, this is the default category";
    }
  }

  orderMe() {
    console.log(this.order.quanitity); // listen, somewhere in my code i delcared this as "quanitity" instead of "quantity" and I dont know where it is to change it back
    this.itemService.createOrder(this.item,this.order.quanitity);
    this.goBack();
  }

  goBack() {
    console.log("clicked goBack");
    this.router.navigate(["/product-list-page"]);
  }

}
