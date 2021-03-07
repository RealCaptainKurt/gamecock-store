import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Item } from '../modal/item';

// Idk if we need this
import { AngularFireModule } from '@angular/fire';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-add-product-page',
  templateUrl: './add-product-page.page.html',
  styleUrls: ['./add-product-page.page.scss'],
})
export class AddProductPagePage implements OnInit {

  item: Item = {
    id: 0,
    name: '',
    price: 0,
    category: '',
    photo: '',
    description: ''
  };

  constructor(
    private fbService: FirebaseService,
    private router: Router
  ) { }

  // update id when called
  ngOnInit() {
    this.item.id = this.fbService.getNextItemID();
  }

  createItem() {
    // log everything
    console.log(this.item.id)
    console.log(this.item.name)
    console.log(this.item.price)
    console.log(this.item.category)
    console.log(this.item.photo)
    console.log(this.item.description)

    // submit the item and go back
    this.fbService.addItem(this.item)
    this.goBack();
  }

  // go back to product list page
  goBack() {
    console.log("clicked goBack");
    this.router.navigate(["../tabs/ProductListPage"]);
  }
}