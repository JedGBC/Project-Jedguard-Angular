import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PublicationDetailsComponent } from './components/publication-details/publication-details.component';
import { Auth0Guard } from './guards/auth0.guard';

const routes: Routes = [
  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) , canActivate:[Auth0Guard]}, 
  { path: 'cart', loadChildren: () => import('./cart/cart.module').then(m => m.CartModule) , canActivate:[Auth0Guard]}, 
  { path: 'payment', loadChildren: () => import('./payment/payment.module').then(m => m.PaymentModule) , canActivate:[Auth0Guard]},
  { path: 'home', component: HomeComponent},
  { path: 'publicationDetails/:id', component: PublicationDetailsComponent},
  { path: '', redirectTo: '/home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
