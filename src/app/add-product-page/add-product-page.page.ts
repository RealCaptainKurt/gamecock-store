import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { ItemService } from '../item.service';
import { Item } from '../modal/item';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-add-product-page',
  templateUrl: './add-product-page.page.html',
  styleUrls: ['./add-product-page.page.scss'],
})
export class AddProductPagePage implements OnInit {

  new_product_form: FormGroup;

  constructor(
    private fbService: FirebaseService,
    public formBuilder: FormBuilder,
    public itemService: ItemService
  ) { }

  ngOnInit() {
    this.new_product_form = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      price: new FormControl(0, Validators.required),
      category: new FormControl('', Validators.required),
      photo: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    });
  }

  createItem(value) {
    console.log(value.name)
    console.log(value.price)
    console.log(value.category)
    console.log(value.photo)
    console.log(value.description)

    // TODO : FIX THIS METHOD
    Item tempItem = new Item()


    this.fbService.addNote(this.note).then(() => {
      //       this.router.navigateByUrl('/');
      //     }, err => {
      //     });

    // this.itemService.createItem(value.name, 
    //   value.price, value.category, value.photo, value.description);

    this.goBack();
  }

  goBack() {
    console.log("clicked goBack");
    this.router.navigate(["./tabs/ProductListPage"]);
  }

}

// import { Component, OnInit } from '@angular/core';
// import {FirebaseService} from '../services/firebase.service';
// import {ActivatedRoute, Router} from '@angular/router';
// import {ToastController} from '@ionic/angular';
// import {Note} from '../modal/Note';

// @Component({
//   selector: 'app-add-note',
//   templateUrl: './add-note.page.html',
//   styleUrls: ['./add-note.page.scss'],
// })
// export class AddNotePage implements OnInit {
//   note: Note = {
//     title: '',
//     content: '',
//     createdAt: new Date().getTime()
//   };

//   constructor(
//       private activatedRoute: ActivatedRoute,
//       private fbService: FirebaseService,
//       private toastCtrl: ToastController,
//       private router: Router
//   ) { }

//   ngOnInit() {
//   }

//   addNote() {
//     this.fbService.addNote(this.note).then(() => {
//       this.router.navigateByUrl('/');
//     }, err => {
//     });
//   }

// }
