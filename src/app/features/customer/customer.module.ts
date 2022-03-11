import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { DashbordComponent } from './dashbord/dashbord.component';
import { CoreModule } from 'src/app/core/core.module';
import { SubHeaderComponent } from './sub-header/sub-header.component';
import { ShowProductComponent } from './show-product/show-product.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';


@NgModule({
  declarations: [
    DashbordComponent,
    ShowProductComponent,
    SubHeaderComponent,
    ShowProductComponent,
    HomeComponent,
    ProductDetailComponent,
  
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    CoreModule
  ]
})
export class CustomerModule { }
