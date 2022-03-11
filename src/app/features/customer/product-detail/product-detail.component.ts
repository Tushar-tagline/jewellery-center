import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShowProductService } from 'src/app/shared/service/show-product.service';

@Component({
  selector: 'jewellery-center-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  public productDetail: any[] = [];
  constructor(private activatedRoute: ActivatedRoute, private showProductService: ShowProductService) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.getProductDetail(id);
  }

  public getProductDetail(id: any): void {
    this.showProductService.getShowProduct().then((res: any) => {
      this.productDetail = res?.filter((product: any) => product.cartId === id);
      console.log('this.productDetail :>> ', this.productDetail);
    })
  }

}


