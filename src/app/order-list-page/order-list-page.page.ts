import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-order-list-page',
  templateUrl: './order-list-page.page.html',
  styleUrls: ['./order-list-page.page.scss'],
})
export class OrderListPagePage {

  orders=[]

  constructor(private router: Router,
    public itemService: ItemService) { 
      this.orders= this.itemService.getOrders();
      console.log("constructor of OrderListPage")
    }

    viewOrder(order) {
      console.log("clicked an order")
      this.router.navigate(["/order-detail-page",order])
    }

}
