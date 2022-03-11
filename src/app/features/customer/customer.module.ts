import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { DashbordComponent } from './dashbord/dashbord.component';
import { CoreModule } from 'src/app/core/core.module';
import { ShowproductComponent } from './showproduct/showproduct.component';


@NgModule({
  declarations: [
    DashbordComponent,
    ShowproductComponent,
  
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    CoreModule
  ]
})
export class CustomerModule { }
