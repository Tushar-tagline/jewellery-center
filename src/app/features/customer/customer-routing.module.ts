import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartItemComponent } from './cart-item/cart-item.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ShowProductComponent } from './show-product/show-product.component';


const routes: Routes = [
  {
    path: '',
    component: DashbordComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'show-product',
        component: ShowProductComponent
      },
      {
        path: 'product-detail/:id',
        component: ProductDetailComponent
      },
      {
        path: 'cart',
        component: CartItemComponent
      },
      {
        path: '**',
        redirectTo: 'home'
      },
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
