import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/shared/service/cart.service';
import { CustomerService } from 'src/app/shared/service/customer.service';

@Component({
  selector: 'jewellery-center-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.scss']
})
export class SubHeaderComponent implements OnInit {
  
  constructor(private router: Router, private customerService: CustomerService) {
   
   }

  ngOnInit(): void {

  }

  setSelectedCategory(category: any, redirectUrl: any) {
    this.customerService.selectedCategory$.next(category);
    this.router.navigate([redirectUrl]);
  }
}
