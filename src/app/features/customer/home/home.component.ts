import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShowProductService } from 'src/app/shared/service/show-product.service';

@Component({
  selector: 'jewellery-center-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public allProduct: any[] = [];
 
  constructor(private showProductService: ShowProductService,private route:Router) { }

  ngOnInit(): void {
    this.getProduct();
  }

  public getProduct(): void {
    this.showProductService.getShowProduct().then((res: any) => {
      this.allProduct = res;
      console.log('res :>> ', res);
    })
  }
  
  public viewDetail(id: string): void {
    this.route.navigate(['./customer/product-detail', id])
  }
}
