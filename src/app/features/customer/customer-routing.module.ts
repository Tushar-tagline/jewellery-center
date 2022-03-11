import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbordComponent } from './dashbord/dashbord.component';
import { HomeComponent } from './home/home.component';
import { ShowProductComponent } from './show-product/show-product.component';


const routes: Routes = [
  {
    path: '',
    component: DashbordComponent,
    children:[
      {
        path:'home',
        component:HomeComponent
      },
      {
        path:'show-product',
        component: ShowProductComponent
      },
      {
        path:'**',
        redirectTo:'home'
      },
    ]
  },
  {
    // path: 'ring',
    // component: RingsComponent
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
