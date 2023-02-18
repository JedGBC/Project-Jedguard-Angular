import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { EditAccountComponent } from './components/edit-account/edit-account.component';


@NgModule({
  declarations: [
    LoginComponent,
    EditAccountComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
