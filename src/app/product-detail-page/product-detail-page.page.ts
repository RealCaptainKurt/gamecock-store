import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ItemService } from '../item.service';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-product-detail-page',
  templateUrl: './product-detail-page.page.html',
  styleUrls: ['./product-detail-page.page.scss'],
})
export class ProductDetailPagePage implements OnInit {

  item=null;
  order={quantity:1};
  orders=[];

  constructor(
    public itemService:ItemService,
    public orderService:OrderService,
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

  // printCategory() {
  //   if(this.item.category == 0) {
  //     return "Toy";
  //   } else if (this.item.category == 1) {
  //     return "Food";
  //   } else if (this.item.category == 2) {
  //     return "Drink";
  //   } else {
  //     return "Error, this is the default category";
  //   }
  // }

  // orderMe() {
  //   console.log(this.order.quantity);
  //   this.orderService.createOrder(this.item,this.order.quantity);
  //   this.goBack();
  // }

  orderMe() {
		let orderid=this.orderService.lastID+1;
    this.orderService.lastID++;
		var d = new Date();
		var date = d.getFullYear().toString() + "/" + d.getMonth().toString() + "/" + d.getDate.toString();
		this.orderService.orders.push({
			id:orderid,
      name:this.item.name,
      photo:this.item.photo,
      price:this.item.price,
			quantity:this.order.quantity,
			date:date,
			amount:this.order.quantity*this.item.price
		});
    this.goBack();
  }

  goBack() {
    console.log("clicked goBack");
    this.router.navigate(["../tabs/ProductListPage"]);
  }

}
