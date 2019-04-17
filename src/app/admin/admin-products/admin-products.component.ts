import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { filter } from 'rxjs/operators';
import { Product } from 'src/app/Models/product-object';



@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {

  productList;
  products:Product[];
  filteredProduct ;


  constructor(private productService:ProductService) {
  
   productService.getAllProducts().snapshotChanges().subscribe(
      list=>{
    this.filteredProduct=  this.productList =list.map(item=>{
          return{
          $key : item.key,
            ...item.payload.val()
          };
        })
       
        console.log("filtered product:" + this.productList);
      });
     
    
      // this.productList.map(
      //   product=>{
      //     this.products = 
      //     );
        }
      

       
        
  
    
  filter(query:string){

     this.filteredProduct  = (query) ?
    this.productList.filter(p=> p.title.toLowerCase().includes(query.toLowerCase())) :
     this.productList;    
  }
  ngOnInit() {
  }

}
