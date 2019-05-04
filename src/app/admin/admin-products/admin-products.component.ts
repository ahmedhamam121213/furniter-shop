import { ProductService } from './../../product.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit , OnDestroy {

  products:any[];
  filteredProducts:any[];
  subscription:Subscription;
  constructor( private productServ : ProductService ) { 
     this.subscription = productServ.getAll().subscribe( products => {
     this.filteredProducts = this.products = products
    })
   }
   search(query){

    if(query){
      this.filteredProducts = this.products.
      filter( p => p.payload.val().title.toLowerCase().includes(query.toLowerCase()) );
    }else{
      this.filteredProducts = this.products
    }

   }

  ngOnInit() {
  }
  ngOnDestroy(){

    this.subscription.unsubscribe();
    
  }
  
}
