import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
// import { ItemService } from '../item.service';
// import { OrderService } from '../order.service';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
import { FirebaseService } from '../services/firebase.service';
import { Item } from '../modal/item';

@Component({
  selector: 'app-product-detail-page',
  templateUrl: './product-detail-page.page.html',
  styleUrls: ['./product-detail-page.page.scss'],
})
export class ProductDetailPagePage implements OnInit {

  item: Item = {
    id: 0,
    name: '',
    price: 0,
    category: '',
    description: '',
    photo: ''
  }

  constructor(
    // public itemService:ItemService,
    // public orderService:OrderService,
    private fbService: FirebaseService,
    private route:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit() {
    // I don't think we need this anymore, leaving it just in case
    //
    // console.log("OnInit");
  	// this.route.params.subscribe(
  	// 	param=>{
  	// 		this.item = param;
  	// 		console.log(this.item);
  	// 	}
  	// )
  }

  // i think this populates the item, but im not sure exactly how
  ngAfterViewInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.fbService.getItem(id).subscribe(itemData => {
        this.item = itemData;
      });
    }
  }

  // simple method to call Firebase addOrder
  orderMe() {
    this.fbService.addOrder(this.item);
    // Commenting out but leaving the code here, just in case
    //
		// let orderid=this.orderService.lastID+1;
    // this.orderService.lastID++;
		// var d = new Date();
		// var date = d.getFullYear().toString() + "/" + d.getMonth().toString() + "/" + d.getDate.toString();
		// this.orderService.orders.push({
		// 	id:orderid,
    //   name:this.item.name,
    //   photo:this.item.photo,
    //   price:this.item.price,
		// 	quantity:this.order.quantity,
		// 	date:date,
		// 	amount:this.order.quantity*this.item.price
		// });
    // this.goBack();
  }

  // goes back to product list page
  goBack() {
    console.log("clicked goBack");
    this.router.navigate(["../tabs/ProductListPage"]);
  }

}
