import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  orders=[{id:1.0,name:"Cocky Plushie",photo:'https://i.pinimg.com/originals/df/cc/e6/dfcce6db471775803f8a37aa7d9876a9.jpg',price:10,quantity:2,date:"2021-2-16",amount:20},
    {id:2.0,name:"Hot Pockets",photo:'https://www.goodnes.com/sites/g/files/jgfbjl131/files/gdn_product/field_product_images/hotpockets-fgrhlkasilhqerh6b7fj.png',price:4,quantity:4,date:"2021-2-16",amount:16}
  ]

  lastID=2

  constructor() { }

  createOrder(item, quantity:number) {
    console.log(item);
		console.log(quantity);
		let orderid=this.lastID+1;
    this.lastID++;
		var d = new Date();
		var date = d.getDate().toString();
		this.orders.push({
			id:orderid,
      name:item.name,
      photo:item.photo,
      price:item.price,
			quantity:quantity,
			date:date,
			amount:quantity*item.price
		});
  }

  getOrders() {
    return this.orders;
  }
}
