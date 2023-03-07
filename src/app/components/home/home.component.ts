import { Component, OnInit } from '@angular/core';
import { ArticlesService, pubs } from 'src/app/services/articles.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  items : pubs [] = [];
  cartItems : pubs [] = [];

  constructor(private myservice: ArticlesService) {
    
    this.items = this.myservice.getDataListComplete();
  }
  ngOnInit(): void {
    
  }

  addCart2(element:number){
    console.log("addCart2(): Se agregó al carrito, el elemento #", element);
    this.myservice.postAdoptionsCartList(this.items[element]);
  }
  

}
