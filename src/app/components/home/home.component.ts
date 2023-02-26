import { Component } from '@angular/core';
import { ArticlesService, pubs } from 'src/app/services/articles.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  items : pubs [] = [];
  
  

  constructor(private myservice: ArticlesService) {
    this.items = this.myservice.getPublications(); 
  }

  addCart2(element:any){
    console.log("addCart2(): Se agregó al carrito, el elemento #", element);
  }

}
