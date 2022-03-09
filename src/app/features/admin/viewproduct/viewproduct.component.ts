import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/shared/service/product.service';

@Component({
  selector: 'jewellery-center-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.scss']
})
export class ViewproductComponent implements OnInit {
  public product: any[] = [];

  constructor(private productService: ProductService, private route: Router) { }

  ngOnInit(): void {
    this.getProduct();
  }

  public getProduct(): void {
    this.productService.getProduct().then((res: any) => {
      this.product = res;
    })
  }

  public deleteProduct(id: string): void {
    this.productService.remove(id);
    this.getProduct();
  }

  public updateProduct(product: any): void {
    localStorage.setItem('updateProductDetail', JSON.stringify(product));
    this.route.navigate(['/admin/edit-product']);
  }
}
