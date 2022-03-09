import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/shared/service/product.service';

@Component({
  selector: 'jewellery-center-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})
export class AddproductComponent implements OnInit {
  public addProduct!: FormGroup;
  public selectcategory: Array<any> = [{
    id: '1',
    value: 'Rings'
  },
  {
    id: '2',
    value: 'Nacklaces'
  },
  {
    id: '3',
    value: 'Earrings'
  },
  {
    id: '4',
    value: 'GiftCard'
  },
  ]
  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.addProduct = new FormGroup({
      ProductName: new FormControl(null, Validators.required),
      productPrice: new FormControl(null, [
        Validators.required,
      ]),
      returnTime: new FormControl(null, [
        Validators.required,
      ]),
      productDetail: new FormControl(null, Validators.required),
      imagePath: new FormControl(null, Validators.required),
      selectCategory: new FormControl(null, Validators.required)
    });
  }

  public onSubmit(): void {
    this.productService.addProductdetail(this.addProduct.value).then((res: any) => {
      this.router.navigate(['/admin/viewproduct']);
    })
  }
}
