import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/service/cart.service';

@Component({
  selector: 'jewellery-center-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {

  constructor(private CartService:CartService) { }

  ngOnInit(): void {
    this.CartService.addProductCarts();
    
  }

}
