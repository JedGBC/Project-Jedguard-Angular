import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) }, 
  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) }, 
  { path: 'cart', loadChildren: () => import('./cart/cart.module').then(m => m.CartModule) }, 
  { path: 'payment', loadChildren: () => import('./payment/payment.module').then(m => m.PaymentModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
