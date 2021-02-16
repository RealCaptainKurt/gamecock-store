import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list-page',
  templateUrl: './product-list-page.page.html',
  styleUrls: ['./product-list-page.page.scss'],
})
export class ProductListPage {

  constructor(private router: Router,
    public itemService) { }


}
