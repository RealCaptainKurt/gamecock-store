import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'ProductListPage',
        loadChildren: () => import('../product-list-page/product-list-page.module').then(m => m.ProductListPageModule)
      },
      {
        path: 'AddProductPagePage',
        loadChildren: () => import('../add-product-page/add-product-page.module').then(m => m.AddProductPagePageModule)
      },
      {
        path: 'OrderListPagePage',
        loadChildren: () => import('../order-list-page/order-list-page.module').then(m => m.OrderListPagePageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/ProductListPage',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/ProductListPage',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
