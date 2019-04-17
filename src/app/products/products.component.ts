import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productList;
  

  constructor(private productService : ProductService) {
    this.productService.getAllProducts().snapshotChanges().subscribe(
      list=>{
      this.productList =list.map(item=>{
          return{
          $key : item.key,
            ...item.payload.val()
          };
        })
       
        console.log("filtered product:" + this.productList);
      });

   }

  ngOnInit() {
  }

}
