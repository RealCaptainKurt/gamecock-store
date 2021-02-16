import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-product-list-page',
  templateUrl: './product-list-page.page.html',
  styleUrls: ['./product-list-page.page.scss'],
})
export class ProductListPage {

  menus=[]

  constructor(private router: Router,
    public itemService: ItemService) { 
      this.menus= this.itemService.getItems();
      console.log("constructor of ProductListPage")
    }

    openAddProductPage() {
      console.log("clicked openAddProductPage");
      this.router.navigate(["/add-product-page"]);
    }

    viewItem(item) {
      console.log("clicked an item")
      this.router.navigate(["/product-detail-page",item])
    }

}
