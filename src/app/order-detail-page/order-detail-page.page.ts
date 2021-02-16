import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-order-detail-page',
  templateUrl: './order-detail-page.page.html',
  styleUrls: ['./order-detail-page.page.scss'],
})
export class OrderDetailPagePage implements OnInit {

  item=null;
  order={quanitity:1};
  orders=[];

  constructor(
    public itemService:ItemService,
    private route:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit() {
    console.log("OnInit");
  	this.route.params.subscribe(
  		param=>{
  			this.item = param;
  			console.log(this.item);
  		}
  	)
  }

  goBack() {
    console.log("clicked goBack");
    this.router.navigate(["/order-list-page"]);
  }

}
