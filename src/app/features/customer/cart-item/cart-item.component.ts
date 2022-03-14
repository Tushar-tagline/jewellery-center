import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/service/cart.service';

@Component({
  selector: 'jewellery-center-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
  public allCartItems: any[] = [];
  public getUser: any;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.getUser = localStorage.getItem('userData')
    let getUserId = JSON.parse(this.getUser).uid;
    this.getAllCarts();

  }

  public getAllCarts() {
    this.cartService.getAllCarts().then((res: any) => {
      console.log('res :>> ', res);
      this.allCartItems = res
      this.allCartItems.map((res) => {
        Object.assign(res)
      })
    })
  }

  public qtyPlus(id: any) {
    let data: any = {};
    this.allCartItems.forEach((res) => {
      if (res.cartId === id) {
        data = {
          ...res,
          qty: res.qty + 1
        }
        this.cartService.updateCartqty(id, data).then(() => {
          this.getAllCarts();
        });
      }
    })
  }

  public qtyMin(id: any) {
    let data: any = {};
    this.allCartItems.forEach((res) => {
      if (res.cartId === id) {
        data = {
          ...res,
          qty: res.qty - 1
        }
        this.cartService.updateCartqty(id, data).then(() => {
          this.getAllCarts();
        });
      }
    })
  }
}
