import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { SingUpComponent } from './components/sing-up/sing-up.component';
import { EditAccountComponent } from './components/edit-account/edit-account.component';


@NgModule({
  declarations: [
    LoginComponent,
    SingUpComponent,
    EditAccountComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
