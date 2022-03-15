import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/service/cart.service';
import { ShowProductService } from 'src/app/shared/service/show-product.service';

@Component({
  selector: 'jewellery-center-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.scss']
})
export class DashbordComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
