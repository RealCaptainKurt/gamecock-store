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
      category: new FormControl(Category[4], Validators.required),
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

    this.itemService.createItem(value.name, 
      value.price, value.category, value.photo, value.description);

    this.goBack();
  }

  goBack() {
    console.log("clicked goBack");
    this.router.navigate(["./tabs/ProductListPage"]);
  }

}
