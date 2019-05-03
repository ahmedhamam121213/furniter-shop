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

const routes: Routes = [
  { path : "" , component : HomeComponent },
  { path : "products" , component : ProductsComponent },
  { path : "shopping-cart" , component : ShoppingCartComponent },
  { path : "order-success" , component : OrderSuccessComponent },
  { path : "login" , component : LoginComponent },
  { path : "admin/orders" , component : AdminOrdersComponent },
  { path : "my/orders" , component : MyOrdersComponent },
  { path : "admin/products" , component : AdminProductsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
