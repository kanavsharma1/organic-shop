import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {

  productList;
  keys$
  constructor(private productService:ProductService) {
      productService.getAllProducts().valueChanges().subscribe(product=>{
this.productList=product;
console.log(this.productList);

     });
     productService.getAllProducts().snapshotChanges().subscribe(key=>{
       this.keys$=key;
        
     }
       
     )
  }

  ngOnInit() {
  }

}
