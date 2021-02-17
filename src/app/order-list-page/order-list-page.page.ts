import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-list-page',
  templateUrl: './order-list-page.page.html',
  styleUrls: ['./order-list-page.page.scss'],
})
export class OrderListPagePage {

  orders=[]

  constructor(private router: Router,
    public orderService: OrderService) { 
      console.log("constructor of OrderListPage")
      this.orders = this.orderService.getOrders();
    }

    ngOnInit() {
      // this.orders = this.orderService.getOrders();
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
