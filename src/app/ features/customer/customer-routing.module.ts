import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbordComponent } from './dashbord/dashbord.component';
import { RingsComponent } from './rings/rings.component';

const routes: Routes = [
  {
    path: 'home',
    component: DashbordComponent
  },
  {
    path:'ring',
    component:RingsComponent
  },
  {
    path: '**',
    redirectTo: 'customer'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
