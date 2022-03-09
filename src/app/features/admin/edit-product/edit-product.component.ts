import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/shared/service/product.service';

@Component({
  selector: 'jewellery-center-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  public editProductForm!: FormGroup;
  public editobj!: any;
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
    const editDetail: any = localStorage.getItem('updateProductDetail');
    this.editobj = JSON.parse(editDetail)
    localStorage.getItem('updateProductDetail');
    this.editProductForm = new FormGroup({
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

    if (this.editobj) {
      this.setProducyValue()
    }
  }

  public setProducyValue(): void {
    this.editProductForm.setValue({
      ProductName: this.editobj.ProductName,
      productPrice: this.editobj.productPrice,
      returnTime: this.editobj.returnTime,
      productDetail: this.editobj.productDetail,
      imagePath: this.editobj.imagePath,
      selectCategory: this.editobj.selectCategory,
    })
  }

  public onSubmit(): void {
    this.productService.productUpdate(this.editobj.cartId, this.editProductForm.value).then((res: any) => {
      this.router.navigate(['/admin/viewproduct']);
    })
  }
}
