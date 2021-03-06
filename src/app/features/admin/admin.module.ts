import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';

import { CoreModule } from 'src/app/core/core.module';
import { AdminHeaderComponent } from 'src/app/core/admin-header/admin-header.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditProductComponent } from './edit-product/edit-product.component';


@NgModule({
  declarations: [
    AddproductComponent,
    ViewproductComponent,
    EditProductComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    CoreModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AdminModule { }
