import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Injectable({
  providedIn: 'root'
})
export class ProfileService{
  
  private onlineUser : any = "*";

  constructor(private auth:AuthService) { }


  getOnlineUser(){
    this.auth.user$.subscribe(user => {
      console.log("################PROFILE USER: ", user);
      this.onlineUser = user;
      if (user == null) {
        sessionStorage.removeItem("userData");
      } else {
        sessionStorage.setItem("userData",this.parseBase64(this.onlineUser.email));
      }
    });
  }
  
  getUser(){
    if (sessionStorage.getItem("userData") != null || sessionStorage.getItem("userData") != undefined) {
      console.log(this.onlineUser);
      this.onlineUser = sessionStorage.getItem("userData");
      return this.onlineUser;
    }
  }
  
  private parseBase64(obj:string){
    let value : string = window.btoa(obj);
    console.log(value);
    return value;
  }
}
