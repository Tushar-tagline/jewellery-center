import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { DashbordComponent } from './dashbord/dashbord.component';
import { RingsComponent } from './rings/rings.component';


@NgModule({
  declarations: [
    DashbordComponent,
    RingsComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
