import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddProductPagePageRoutingModule } from './add-product-page-routing.module';

import { AddProductPagePage } from './add-product-page.page';

const routes: Routes = [
  {
    path: '',
    component: AddProductPagePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddProductPagePageRoutingModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddProductPagePage]
})
export class AddProductPagePageModule {}
