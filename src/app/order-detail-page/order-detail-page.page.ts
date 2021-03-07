import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Order } from '../modal/order';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-order-detail-page',
  templateUrl: './order-detail-page.page.html',
  styleUrls: ['./order-detail-page.page.scss'],
})
export class OrderDetailPagePage implements OnInit {

  // I wrote this in alphabetical order this time, it was just easier
  order: Order = {
    amount: 0,
    category: '',
    date: '',
    id: 0,
    name: '',
    photo: '',
    price: 0,
    quantity: 0
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fbService: FirebaseService
  ) { }

  ngOnInit() {
    // empty
  }

  ngAfterViewInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.fbService.getOrder(id).subscribe(orderData => {
        this.order = orderData;
      });
    }
  }
  // ngOnInit() {
  //   console.log("OnInit");
  // 	this.route.params.subscribe(
  // 		param=>{
  // 			this.order = param;
  // 			console.log(this.order);
  // 		}
  // 	)
  // }

  goBack() {
    console.log("clicked goBack");
    this.router.navigate(["../tabs/OrderListPagePage"]);
  }

}
