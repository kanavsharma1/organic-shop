import { Injectable } from '@angular/core';
import { AngularFireDatabase, snapshotChanges } from 'angularfire2/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db : AngularFireDatabase) { }

  createProduct(product){
    return this.db.list('/products').push(product);
  }

  getAllProducts()
  {
    return this.db.list('/products');
    
  }
}
