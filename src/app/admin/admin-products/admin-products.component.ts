import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';



@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {

  productList =[];
  keys$;
  constructor(private productService:ProductService) {
//       productService.getAllProducts().valueChanges().subscribe(product=>{
// this.productList=product;// gets the list of products but not key
// console.log(this.productList);

    //  });
    this.keys$= productService.getAllProducts().subscribe(
      list=>{
        this.productList=list.map(item=>{
          return{
          $key : item.key,
            ...item.payload.val()
          };
        })
      }
    )
    console.log(this.keys$);
        
     
       
     
  }

  ngOnInit() {
  }

}
