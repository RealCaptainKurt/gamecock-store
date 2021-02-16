import { Injectable } from '@angular/core';
import { Category } from './category.enum';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  menus=[{name:"",price:0,category:Category['toy'],photo:'m',description:''},
    {name:"",price:0,category:Category['toy'],photo:'m',description:''},
    {name:"",price:0,category:Category['food'],photo:'m',description:''},
    {name:"",price:0,category:Category['food'],photo:'m',description:''},
    {name:"",price:0,category:Category['drink'],photo:'m',description:''},
    {name:"",price:0,category:Category['drink'],photo:'m',description:''}
  ]

  orders=[]



  constructor() { }

  createItem(name1: string, price1:number, cat1:Category, photo1, description1) {
    this.menus.push({name:"name1",price:price1,category:Category['cat1'],photo:"photo1",description:"description1"});
  }

  getItems() {
    return this.menus;
  }

  // Don't need this right now, but I feel like we will later, so I'm implementing it anyways
  // createOrder(item, quantity) {
  //  console.log(item)
	// 	console.log(quantity)
	// 	let orderid=Math.random() * (99999 - 10000) + 10000;
	// 	var d = new Date();
	// 	var date = d.getDate().toString();
	// 	this.orders.push({
	// 		id:orderid,
	// 		quantity:quantity,
	// 		date:date,
	// 		amount:quantity*item.price
	// 	});
  // }

  getOrders() {
    return this.orders;
  }

  // don't need this anyways
  // deleteItem(name1) {
  //   this.menus.pop
  // }
}
