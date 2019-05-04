import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor( private db :AngularFireDatabase ) { }

  create(product){
    return this.db.list('/products').push(product);
  }
  getAll(){
   return this.db.list('/products').snapshotChanges();
  }

  getProductValues( productID ){
    return this.db.object('/products/' + productID).valueChanges();
  }
  update( productID , product ){
    return this.db.object('/products/' + productID).update(product);
  }
}
