import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BootstrapNavbarComponent } from './bootstrap-navbar/bootstrap-navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import {  AngularFireAuthModule } from '@angular/fire/auth';
import {FormsModule} from '@angular/forms';
import {CustomFormsModule} from 'ng2-validation';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';


import { AuthserviceService } from './services/authservice.service';
import { AuthGaurdService } from './services/auth-gaurd.service';
import { UserService } from './services/user.service';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AdminAuthGaurdService } from './services/admin-auth-gaurd.service';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { CategoryService } from './services/category.service';



const routes: Routes = [
  { path:'' , component: HomeComponent},
  {path: 'products', component: ProductsComponent},
  {path:'shopping-cart' , component:ShoppingCartComponent},
  {path:'checkout' , component:CheckoutComponent ,canActivate : [AuthGaurdService]},
  {path:'order-success' , component:OrderSuccessComponent ,canActivate : [AuthGaurdService]},
  {path:'my-orders' , component:MyOrdersComponent},
  {path:'login' , component:LoginComponent},
  
  {path:'admin/admin-products' , 
  component:AdminProductsComponent ,
  canActivate : [AuthGaurdService, AdminAuthGaurdService]},

  {path:'admin/admin-products/new' , 
  component:ProductFormComponent,
  canActivate : [AuthGaurdService, AdminAuthGaurdService]},
  
  {path:'admin/admin-products/:id' , 
  component:ProductFormComponent,
  canActivate : [AuthGaurdService, AdminAuthGaurdService]},


  {path:'admin/admin-orders' , 
  component:AdminOrdersComponent, 
  canActivate : [AuthGaurdService, AdminAuthGaurdService]}
 ];
 


@NgModule({
  declarations: [
    AppComponent,
    BootstrapNavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    CheckoutComponent,
    LoginComponent,
    ProductFormComponent,
    
  ],
  imports: [
    MatCardModule,
    MatTableModule,
    BrowserAnimationsModule,
    BrowserModule,
    CustomFormsModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
   AngularFirestoreModule,
   AngularFireAuthModule,
   AngularFireDatabaseModule,
   NgbModule.forRoot(),
   RouterModule.forRoot(routes)
  ],
  providers: [AuthserviceService,
               AuthGaurdService,
              UserService,
                AdminAuthGaurdService,
                CategoryService] ,
  bootstrap: [AppComponent]
})
export class AppModule { }
