import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
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
