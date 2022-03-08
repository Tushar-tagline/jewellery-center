import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { GoBackComponent } from './go-back/go-back.component';
import { RouterModule } from '@angular/router';
import { AdminHeaderComponent } from './admin-header/admin-header.component';




@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    GoBackComponent,
    AdminHeaderComponent
    
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    GoBackComponent,
   
  ]
})
export class CoreModule { }
