import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/service/product.service';

@Component({
  selector: 'jewellery-center-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.scss']
})
export class ViewproductComponent implements OnInit {
  public product: any[] = [];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProduct().then((res: any) => {
      console.log('res :>> ', res)
      this.product = res
    })
  }

  public deleteproduct(id: string) {
    console.log('id :>> ', id);
    this.productService.remove(id);
  }
}
