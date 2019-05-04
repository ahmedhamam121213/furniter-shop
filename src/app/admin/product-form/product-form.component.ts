import { Router } from '@angular/router';
import { ProductService } from './../../product.service';
import { CategoriesService } from './../../categories.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  categories:any;
  constructor( private categoryServ : CategoriesService , 
    private productServ : ProductService ,
    private router : Router ) { 
    this.categories = this.categoryServ.getCategories();
  }

  save(product){
    this.productServ.create(product);
    this.router.navigate(['/admin/products']);

  }

  ngOnInit() {
  }

}
