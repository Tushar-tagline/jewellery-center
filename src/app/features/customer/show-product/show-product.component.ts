import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/shared/service/customer.service';
import { ProductService } from 'src/app/shared/service/product.service';
import { ShowProductService } from 'src/app/shared/service/show-product.service';

@Component({
  selector: 'jewellery-center-show-product',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.scss']
})
export class ShowProductComponent implements OnInit {
  public selectedCategory: string = '';
  public allProduct: any[] = [];
  public filterProduct: any[] = [];

  constructor(private customerService: CustomerService, private showProductService: ShowProductService) { }

  ngOnInit(): void {
    this.getProduct();
    this.changeSelectionCategory();
  }

  public changeSelectionCategory() {
    this.customerService.selectedCategory$.subscribe((category: any) => {
      this.selectedCategory = category;
      this.filterProduct = this.allProduct.filter((product) => product.categoryType === this.selectedCategory);
    });
  }

  public getProduct(): void {
    this.showProductService.getShowProduct().then((res: any) => {
      this.allProduct = res;
      this.changeSelectionCategory();
    })
  }

}
