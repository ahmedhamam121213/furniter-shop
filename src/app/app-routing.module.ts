import { ProductFormComponent } from './admin/product-form/product-form.component';
import { CheckingOutComponent } from './checking-out/checking-out.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { LoginComponent } from './login/login.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProtectLinkService } from './protect-link.service';

const routes: Routes = [
  { path : "" , component : HomeComponent },
  { path : "products" , component : ProductsComponent },
  { path : "shopping-cart" , component : ShoppingCartComponent },
  { path : "order-success" , component : OrderSuccessComponent , canActivate : [ProtectLinkService] },
  { path : "login" , component : LoginComponent },
  { path : "check-out" , component : CheckingOutComponent,canActivate : [ProtectLinkService] },
  { path : "my/orders" , component : MyOrdersComponent , canActivate : [ProtectLinkService] },
  { path : "admin/product/new" , component : ProductFormComponent, canActivate : [ProtectLinkService]},
  
  { path : "admin/orders" , component : AdminOrdersComponent, canActivate : [ProtectLinkService,]},
  { path : "admin/products" , component : AdminProductsComponent , canActivate : [ProtectLinkService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
