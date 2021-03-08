import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
// import { ItemService } from '../item.service';
// import { OrderService } from '../order.service';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
import { FirebaseService } from '../services/firebase.service';
import { Item } from '../modal/item';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-product-detail-page',
  templateUrl: './product-detail-page.page.html',
  styleUrls: ['./product-detail-page.page.scss'],
})
export class ProductDetailPagePage implements OnInit, AfterViewInit {

  item: Item = {
    id: 0,
    name: '',
    price: 0,
    category: '',
    description: '',
    photo: ''
  };
  quantity: number;

  constructor(
    // public itemService:ItemService,
    // public orderService:OrderService,
    private fbService: FirebaseService,
    private route:ActivatedRoute,
    private router:Router,
    public alertController:AlertController
  ) { }

  ngOnInit() {
    // I don't think we need this anymore, leaving it just in case
    //
    console.log("OnInit");
  	this.route.params.subscribe(
  		params=>{
  			this.item.id = params.id;
        this.item.name = params.name;
        this.item.price = params.price;
        this.item.category = params.category;
        this.item.description = params.description;
        this.item.photo = params.photo;
  			console.log(this.item);
  		}
  	)
  }

  // i think this populates the item, but im not sure exactly how

  ngAfterViewInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.fbService.getItem(id).subscribe(itemData => {
        this.item.id = itemData.id;
        this.item.name = itemData.name;
        this.item.price = itemData.price;
        this.item.category = itemData.category;
        this.item.description = itemData.description;
        this.item.photo = itemData.photo;
      });
    }
  }

  // simple method to call Firebase addOrder
  orderMe() {
    this.fbService.addOrder(this.item, this.quantity);
    this.goBack();
  }

  // goes back to product list page
  goBack() {
    console.log("clicked goBack");
    this.router.navigate(["../tabs/ProductListPage"]);
  }

}
