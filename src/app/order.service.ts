import { Injectable } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  orders=[{id:1,name:"Cocky Plushie",photo:'https://i.pinimg.com/originals/df/cc/e6/dfcce6db471775803f8a37aa7d9876a9.jpg',price:10,quantity:2,date:"2021-2-16",amount:20},
    {id:2,name:"Hot Pockets",photo:'https://www.goodnes.com/sites/g/files/jgfbjl131/files/gdn_product/field_product_images/hotpockets-fgrhlkasilhqerh6b7fj.png',price:4,quantity:4,date:"2021-2-16",amount:16},
    {id:3,name:"Coke",photo:'https://images.heb.com/is/image/HEBGrocery/000145352',price:2,quantity:6,date:"2021-2-16",amount:12},
    {id:4,name:"Gatorade",photo:'https://images.heb.com/is/image/HEBGrocery/000532225',price:1,quantity:8,date:"2021-2-16",amount:8},
    {id:5,name:"Gamecock Unicorn",photo:'https://images.footballfanatics.com/FFImage/thumb.aspx?i=/productimages/_3537000/ff_3537339-508194ab116e4f48b9cb_full.jpg&w=900',price:15,quantity:3,date:"2021-2-16",amount:45}
  ]

  public lastID=5;

  constructor() { }

  // createOrder(item, quantity:number) {
  //   console.log(item);
	// 	console.log(quantity);
	// 	let orderid=this.lastID+1;
  //   this.lastID++;
	// 	var d = new Date();
	// 	var date = d.getDate().toString();
	// 	this.orders.push({
	// 		id:orderid,
  //     name:item.name,
  //     photo:item.photo,
  //     price:item.price,
	// 		quantity:quantity,
	// 		date:date,
	// 		amount:quantity*item.price
	// 	});
  // }

  getOrders() {
    return this.orders;
  }
}
