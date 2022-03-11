import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ShowProductService {
  public basePath = this.db.database.ref('/products');
  

  constructor(private db: AngularFireDatabase) { }

  public getShowProduct(): any {
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
}
