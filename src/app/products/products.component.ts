import { Component } from '@angular/core';
import { pubs } from '../services/articles.service';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  
  items : pubs [] = [];

  constructor(private service: ProfileService) {
    
    let user:string = this.service.getUser();
    
    this.cargarData(user);

  }

  addEdit(element:any){
    console.log("addEdit(): Se Editara, el elemento #", element);
  }
  
  cargarData(user:string){
    //debugger;
    let check : number;
    let check2 : number;
    check = Number(localStorage.getItem("check"));
    check2 = Number(localStorage.getItem("check2"));
    if (check === 1 && check2 === 0) {
      if (user == JSON.parse(localStorage.getItem("postPublication") || "[]").id_user) {
        this.items = JSON.parse("["+(localStorage.getItem("postPublication") || "[]")+"]");
      }
    } else if (check > 1 && check2 === 0) {
      
      for (let index = 0; index < check; index++) {
        if (user == JSON.parse(localStorage.getItem("postPublication") || "[]")[index].id_user) {
          this.items.push((JSON.parse(localStorage.getItem("postPublication") || "[]"))[index]);
        } else {
          this.items.push({cardTitlePub : "", message : "", imagen : "", id_user : "", item_id : ""});
        }
      }
      

    } else if (check === 1 && check2 === 1){
      if (user == JSON.parse(localStorage.getItem("postPublication") || "[]")[0].id_user) {
        this.items = JSON.parse(localStorage.getItem("postPublication") || "[]");
      }
    }
    console.log(this.items);
    for (let index = 0; index < check; index++) {
      console.log(this.items[index]);
    }

  }

}
