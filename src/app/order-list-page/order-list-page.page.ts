import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireModule, FirebaseApp } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Order } from '../modal/order';
import { FirebaseService } from '../services/firebase.service';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';

@Component({
  selector: 'app-order-list-page',
  templateUrl: './order-list-page.page.html',
  styleUrls: ['./order-list-page.page.scss'],
})
export class OrderListPagePage {

  private orders: Observable<Order[]>;

  constructor(private router: Router,
    private fbService: FirebaseService,
    public angularFire: AngularFireAuth) { 
      // empty
    }

    ngOnInit() {
      console.log("home ")
      this.orders = this.fbService.getOrders();

      var user1 = firebase.auth().currentUser;
		  console.log(user1.uid)
    }

    viewOrder(order) {
      console.log("clicked an order")
      this.router.navigate(["/order-detail-page",order])
    }

  // helpful code, thank you Vishal
  //   orders=[]

  // constructor(private router: Router, 
  //   public orderService: OrderService) { }

  // ngOnInit() {
  //   this.orders = this.orderService.getOrders();
  // }

  // viewOrder(order) {
  //   this.router.navigate(["/order-detail",order])
  // }

}
