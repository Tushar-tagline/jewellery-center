import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  public basePath = this.db.database.ref('/cart');

  constructor(private db: AngularFireDatabase) {
    // this.getAllCarts();
    this.getcart();
    // this.remove();
    this.getupdateCarts()
  }

  public getAllCarts(): void {
    const data = {
      name: 'product1',
      value: 1200
    }
    this.basePath.push(data)
  }

  public getcart(): void {
    this.basePath.on('value', (data: any) => {
      const allCarts = Object.keys(data.val()).map((key) => {
        return {
          ...data.val()[key],
          cartId: key,

        };
      });
      console.log(allCarts)
    });
  }

  public remove(id: string = '-MxcmoQVZ-khD8fGz7E1') {
    const basePath = this.db.database.ref('/cart' + id);
    basePath.remove();
  }

  public getupdateCarts(id: string = '-Mxcqao3geNJqQZAYskN'): void {
    const data = {
      name: 'ring',
      value: 1100
    }
    const basePath = this.db.database.ref('/cart/' + id);
    basePath.update(data)
  }

}
