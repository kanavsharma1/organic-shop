import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
categories$ : Observable<any>;   // creating variable of type observable because getCategories() return observable 
  constructor(
    private router:Router,
    private categoryService: CategoryService, 
    private productService:ProductService) {

this.categories$ = categoryService.getCategories();

   }

   save(product){
     this.productService.createProduct(product);
     this.router.navigate(['/admin/admin-products']);
   }

   

}
