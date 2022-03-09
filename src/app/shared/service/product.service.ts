import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';



@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public basePath = this.db.database.ref('/products');
  constructor(private db: AngularFireDatabase) { 
    
}

  public addProductdetail(productDetails:any): void {
    this.basePath.push(productDetails)
  }

  public getProduct(): any {
    return new Promise((resolve, reject) => {
      this.basePath.on('value', (data: any) => {
        const allProduct = Object.keys(data.val()).map((key) => {
          return {
            ...data.val()[key],
            cartId: key,
            
          };
        });
        resolve(allProduct);
      });
    });
  }

  public remove(id: string):any {
      const basePath = this.db.database.ref('/products/' + id);
      basePath.remove();
    }
}
