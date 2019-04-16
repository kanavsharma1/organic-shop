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
    return this.db.list('/products').snapshotChanges();
    
  }

  getProduct(productId){
    return this.db.object('/products/'+ productId);

  }
  updateProduct(productId, product){
    this.db.object('/products/'+productId).update(product);
  }

  deleteProduct(productId)
  {
    this.db.object('/products/'+ productId).remove();
  }
}
