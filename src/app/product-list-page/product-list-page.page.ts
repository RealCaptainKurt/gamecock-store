import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Item } from '../modal/item';
// import { ItemService } from '../item.service';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-product-list-page',
  templateUrl: './product-list-page.page.html',
  styleUrls: ['./product-list-page.page.scss'],
})
export class ProductListPage implements OnInit {

  private items: Observable<Item[]>;

  constructor(private router: Router,
    private fbService: FirebaseService) { 
      console.log("constructor of ProductListPage")
    }
    ngOnInit(): void {
      this.items = this.fbService.getItems();
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
