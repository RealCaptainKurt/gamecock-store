import { Injectable } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  // Hard coding in some items and orders
  menus=[{name:"Cocky Plushie",price:10,category:"toy",photo:'https://i.pinimg.com/originals/df/cc/e6/dfcce6db471775803f8a37aa7d9876a9.jpg',description:'A cute plushie of our favorite mascot! Wearing glasses because he studies hard!'},
    {name:"Gamecock Unicorn",price:15,category:"toy",photo:'https://images.footballfanatics.com/FFImage/thumb.aspx?i=/productimages/_3537000/ff_3537339-508194ab116e4f48b9cb_full.jpg&w=900',description:'A UNICORN! This toy is great for girls of any age, and it bears our emblem proudly on its side!'},
    {name:"Digiorno 3 Pack Frozen Pizza",price:12,category:"food",photo:'https://scene7.samsclub.com/is/image/samsclub/0007192145842_A',description:'A three pack of Digiorno Rising Crust pizza, great for get-togethers or just an easy meal!'},
    {name:"Hot Pockets",price:4,category:"food",photo:'https://www.goodnes.com/sites/g/files/jgfbjl131/files/gdn_product/field_product_images/hotpockets-fgrhlkasilhqerh6b7fj.png',description:'Assorted flavors of hot pockets, great for a quick meal on a budget! Available in several varieties.'},
    {name:"Coca-Cola",price:2,category:"drink",photo:'https://images.heb.com/is/image/HEBGrocery/000145352',description:'A fan-favorite drink, great for washing down pizza or just to go along with studying!'},
    {name:"Gatorade",price:1,category:"drink",photo:'https://images.heb.com/is/image/HEBGrocery/000532225',description:'Delicious power drink for workouts or athletics alike, or just to recharge after a tough day!'}
  ]

  constructor() { }

  createItem(name1, price1:number, cat1, photo1, description1) {
    this.menus.push({name:name1,price:price1,category:cat1,photo:photo1,description:description1});
  }

  // Didn't end up using this
  // findItem(name) {
  //   for(let i = 0; i < this.menus.length; i++) {
  //     if(this.menus[i].name == name)
  //       return this.menus[i];
  //   }
  // }

  getItems() {
    return this.menus;
  }

}
