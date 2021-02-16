import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { ItemService } from '../item.service';
import { Category } from '../category.enum';

@Component({
  selector: 'app-add-product-page',
  templateUrl: './add-product-page.page.html',
  styleUrls: ['./add-product-page.page.scss'],
})
export class AddProductPagePage implements OnInit {

  new_product_form: FormGroup;

  constructor(
    private router: Router,
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

  createItem(item) {
    console.log(item.name)
    console.log(item.price)
    console.log(item.category)
    console.log(item.photo)
    console.log(item.description)

    this.itemService.createItem(item.name, 
      item.price, item.category, item.photo, item.description);

    this.goBack();
  }

  goBack() {
    this.router.navigate(['/tabs/ProductListPage']);
  }

}
