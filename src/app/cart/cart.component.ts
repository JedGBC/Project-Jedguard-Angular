import { Component, OnInit } from '@angular/core';
import { ArticlesService, pubs } from '../services/articles.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  
  items3 : pubs [] = [];

  
constructor(private service: ArticlesService) {
  this.callBackOnInit();
}

ngOnInit(): any {
  
}

callBackOnInit(){
  this.items3 = this.service.getAdoptionsCartList();
  console.log("Lista del carrito",this.items3);
}

addEdit(element:any){
  console.log("addEdit(): Elemento #", element);
}


}
