import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import 'rxjs/add/operator/take';
import { ProductService } from 'src/app/services/product.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
 id;
  product;
categories$ : Observable<any>;   // creating variable of type observable because getCategories() return observable 
  constructor(
    private router:Router,
    private route: ActivatedRoute,
    private categoryService: CategoryService, 
    private productService:ProductService) {

this.categories$ = categoryService.getCategories();

      this.id = this.route.snapshot.paramMap.get('id');
      if(this.id)
    this.product= this.productService.getProduct(this.id).valueChanges().subscribe(p=>{
    this.product=p;
    })
    console.log(this.product)
    }


   save(product){
     if(this.id) this.productService.updateProduct(this.id,product);

     else this.productService.createProduct(product);

     this.router.navigate(['/admin/admin-products']);
   }

   deleteProduct(){
    if(!confirm("are you sure you want to delete")) return;

    this.productService.deleteProduct(this.id);
    this.router.navigate(['/admin/admin-products']);
    
   }

   

}
