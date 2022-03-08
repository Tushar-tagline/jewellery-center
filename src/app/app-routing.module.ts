import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'user', loadChildren: () => import('./ features/auth/auth.module').then(m => m.UserModule)
  },
  {
    path: 'customer', loadChildren: () => import('./ features/customer/customer.module').then(m => m.CustomerModule)
  },
  {
    path: '**',
    redirectTo: '/customer/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
