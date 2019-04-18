import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { CategoryService } from '../services/category.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../Models/product-object';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productList:any[] = [];
  categories;
  category;
  filteredProducts : any[] = [];
  

  constructor(private productService : ProductService, 
              private categoryService: CategoryService,
              private route : ActivatedRoute) {
    this.productService.getAllProducts().snapshotChanges().subscribe(
      list=>{
      this.productList =list.map(item=>{
          return{
          $key : item.key,
            ...item.payload.val()
          };
        })
        this.category = this.route.queryParamMap.subscribe(param=>{
          this.category =  param.get('category');
           
          this.filteredProducts = (this.category) ?
          this.productList.filter(p => p.category === this.category): 
          this.productList;
          

        });
       
      });

     this.categoryService.getCategories().subscribe(
        list=>{
        this.categories =list.map(item=>{
            return{
            $key : item.key,
              ...item.payload.val()
            }
          });
        
        });


       


   }

  ngOnInit() {
  }

}
