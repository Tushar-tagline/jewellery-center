import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';


const routes: Routes = [
  {
    path: 'home',
    component: AdminDashboardComponent
  },
  {
    path: 'addproduct',
    component: AddproductComponent
  },
  {
    path: 'viewproduct',
    component: ViewproductComponent
  },
  {
    path: '**',
    redirectTo: 'admin'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
