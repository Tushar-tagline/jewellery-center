import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  public basePath = this.db.database.ref('/carts');

  constructor(private db: AngularFireDatabase) { }

  public getAllCarts(): any {
    return new Promise((resolve, reject) => {
      this.basePath.on('value', (data: any) => {
        const allCarts = Object.keys(data.val()).map((key) => {
          return {
            ...data.val()[key],
            cartId: key,
          };
        });
        resolve(allCarts)
      });
    });
  }

  public addCartDetail(cartProductDetails: any): any {
    return new Promise((resolve, reject) => {
      this.basePath.push(cartProductDetails);
      resolve(true);
    });
  }

  public updateCartqty(id: any, cartProductDetails: any): any {
    return new Promise((resolve, reject) => {
      const basePath = this.db.database.ref('/carts/' + id);
      basePath.update(cartProductDetails);
      resolve(true);
    });
  }
  
  public remove(id: string): any {
    const basePath = this.db.database.ref('/carts/' + id);
    basePath.remove();
  }
}
