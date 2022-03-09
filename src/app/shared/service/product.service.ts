import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';



@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public basePath = this.db.database.ref('/products');
  constructor(private db: AngularFireDatabase) {

  }

  public addProductdetail(productDetails: any): any {
    return new Promise((resolve, reject)=>{
      this.basePath.push(productDetails);
      resolve(true);
    });
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

  public remove(id: string): any {
    const basePath = this.db.database.ref('/products/' + id);
    basePath.remove();
  }

  public productUpdate(id: string, data:any): any {
    return new Promise((resolve, reject)=>{
      const basepath = this.db.database.ref('/products/' + id)
      basepath.update(data)
      resolve(true);
    });
  }
}
