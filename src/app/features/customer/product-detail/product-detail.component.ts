import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/shared/service/cart.service';
import { ShowProductService } from 'src/app/shared/service/show-product.service';

@Component({
  selector: 'jewellery-center-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  public productDetail: any[] = [];
  public allCart: any[] = [];
  public getUser: any;


  constructor(
    private activatedRoute: ActivatedRoute,
    private showProductService: ShowProductService,
    private cartService: CartService,
    private route: Router) {
    this.getUser = localStorage.getItem('userData')
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.getProductDetail(id);
  }

  public getProductDetail(id: any): void {
    this.showProductService.getShowProduct().then((res: any) => {
      this.productDetail = res?.filter((product: any) => product.cartId === id);
      })
  }

  public addToCart(appProduct: any) {
    const data = {
      ...appProduct,
      qty: 1,
      customerId: JSON.parse(this.getUser).uid
    }
    this.cartService.addCartDetail(data);
  }
}


