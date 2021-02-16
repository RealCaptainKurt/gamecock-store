import { Injectable } from '@angular/core';
import { Category } from './category.enum';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  // Hard coding in some items and orders
  menus=[{name:"Cocky Plushie",price:10,category:Category['toy'],photo:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ebay.com%2Fitm%2FSouth-Carolina-Gamecocks-Study-Buddy-NCAA-Plush-Stuffed-Animal-%2F163993500148&psig=AOvVaw3-Nk6u_2HCnfebh-1hofoi&ust=1613577184564000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLClts3h7u4CFQAAAAAdAAAAABAD',description:'A cute plushie of our favorite mascot! Wearing glasses because he studies hard!'},
    {name:"Gamecock Unicorn",price:15,category:Category['toy'],photo:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fshop.gamecocksonline.com%2Fsouth-carolina-gamecocks-plush-unicorn%2Fp-14059241817076%2Bz-836-2760166575&psig=AOvVaw3-Nk6u_2HCnfebh-1hofoi&ust=1613577184564000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLClts3h7u4CFQAAAAAdAAAAABAI',description:'A UNICORN! This toy is great for girls of any age, and it bears our emblem proudly on its side!'},
    {name:"Digiorno 3 Pack Frozen Pizza",price:12,category:Category['food'],photo:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.samsclub.com%2Fp%2Fdigiorno-rising-crust-pepperoni-pizza-29-6-oz-3-ct%2F163949&psig=AOvVaw1b9elKKLDa4CNpuGmwdah3&ust=1613577335351000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPj5vZLi7u4CFQAAAAAdAAAAABAD',description:'A three pack of Digiorno Rising Crust pizza, great for get-togethers or just an easy meal!'},
    {name:"Hot Pockets",price:4,category:Category['food'],photo:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.goodnes.com%2Fhot-pockets%2Fproducts%2Ffour-cheese-pizza-2-pack%2F&psig=AOvVaw2hrjy8rNsgdVekAE3XdCdr&ust=1613577411013000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIC17Lji7u4CFQAAAAAdAAAAABADm',description:'Assorted flavors of hot pockets, great for a quick meal on a budget! Available in several varieties.'},
    {name:"Coca-Cola",price:2,category:Category['drink'],photo:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.heb.com%2Fproduct-detail%2Fcoca-cola-classic-coke%2F145352&psig=AOvVaw1l0COXmdf0MHu35-if90QN&ust=1613577487887000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJDfj9vi7u4CFQAAAAAdAAAAABAD',description:'A fan-favorite drink, great for washing down pizza or just to go along with studying!'},
    {name:"Gatorade",price:1,category:Category['drink'],photo:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.heb.com%2Fproduct-detail%2Fgatorade-cool-blue-thirst-quencher%2F532225&psig=AOvVaw2hy2RgHHnctRBcn6K8h_jM&ust=1613577555044000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOC66vri7u4CFQAAAAAdAAAAABAD',description:'Delicious power drink for workouts or athletics alike, or just to recharge after a tough day!'}
  ]

  orders=[
    {id:1,item:this.findItem("Cocky Plushy"),quanitity:2,date:'2021-2-16',amount:12.0},
    {id:2,item:this.findItem("Hot Pockets"),quanitity:4,date:'2021-2-16',amount:15.0}
  ]

  constructor() { }

  createItem(name1:string, price1:number, cat1:Category, photo1:string, description1:string) {
    this.menus.push({name:name1,price:price1,category:cat1,photo:photo1,description:description1});
  }

  findItem(name) {
    for(let i = 0; i < this.menus.length; i++) {
      if(this.menus[i].name == name)
        return this.menus[i];
    }
  }

  getItems() {
    return this.menus;
  }

  // Don't need this right now, but I feel like we will later, so I'm implementing it anyways
  createOrder(item, quantity:number) {
    console.log(item);
		console.log(quantity);
		let orderid=Math.random() * (99999 - 10000) + 10000;
		var d = new Date();
		var date = d.getDate().toString();
		this.orders.push({
			id:orderid,
      item:item,
			quanitity:quantity,
			date:date,
			amount:quantity*item.price
		});
  }

  getOrders() {
    return this.orders;
  }

  // don't need this anyways
  // deleteItem(name1) {
  //   this.menus.pop
  // }
}
