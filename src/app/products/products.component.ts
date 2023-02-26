import { Component } from '@angular/core';
import { pubs } from '../services/articles.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  
  items : pubs [] = [];

  constructor() {
    //debugger;
    let check : number;
    let check2 : number;
    check = Number(localStorage.getItem("check"));
    check2 = Number(localStorage.getItem("check2"));
    if (check === 1 && check2 === 0) {
      this.items = JSON.parse("["+(localStorage.getItem("postPublication") || "[]")+"]") ;
    } else if (check > 1 && check2 === 0) {
      this.items = JSON.parse(localStorage.getItem("postPublication") || "[]");
    } else if (check === 1 && check2 === 1){
      this.items = JSON.parse(localStorage.getItem("postPublication") || "[]");
    }
    
    console.log(this.items);
    
    

    for (let index = 0; index < check; index++) {
      console.log(this.items[index]);
      
    }
  }

  addEdit(element:any){
    console.log("addEdit(): Se Editara, el elemento #", element);
  }


}
