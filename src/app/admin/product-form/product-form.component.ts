import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from './../../product.service';
import { CategoriesService } from './../../categories.service';
import { Component, OnInit } from '@angular/core';
import "rxjs/add/operator/take";
@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  categories:any;
  prodVals ={};
  id;
  constructor( private categoryServ : CategoriesService , 
    private productServ : ProductService ,
    private router : Router,
    private route : ActivatedRoute ) { 
    this.categories = this.categoryServ.getCategories();

    this.id = this.route.snapshot.paramMap.get('id');
    this.prodVals = this.productServ.getProductValues(this.id).take(1).subscribe( vals => {
      this.prodVals = vals;
    } )
      
  }

  save(product){
    if( this.id ){
      this.productServ.update(this.id,product)
    }else{
      this.productServ.create(product);
    }
    
    this.router.navigate(['/admin/products']);

  }

  ngOnInit() {
  }

}
