import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { DashbordComponent } from './dashbord/dashbord.component';
import { RingsComponent } from './rings/rings.component';
import { CoreModule } from 'src/app/core/core.module';


@NgModule({
  declarations: [
    DashbordComponent,
    RingsComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    CoreModule
  ]
})
export class CustomerModule { }
