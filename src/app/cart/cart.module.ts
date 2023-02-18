import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { SummaryComponent } from './components/summary/summary.component';
import { DispathAddressComponent } from './components/dispath-address/dispath-address.component';
import { ConfirmAndPaymentComponent } from './components/confirm-and-payment/confirm-and-payment.component';


@NgModule({
  declarations: [
    CartComponent,
    SummaryComponent,
    DispathAddressComponent,
    ConfirmAndPaymentComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule
  ]
})
export class CartModule { }
