import { DOCUMENT } from '@angular/common';
import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { ArticlesService } from 'src/app/services/articles.service';

@Component({
  selector: 'app-show-list-articles',
  templateUrl: './show-list-articles.component.html',
  styleUrls: ['./show-list-articles.component.css']
})
export class ShowListArticlesComponent {
  @Input() dataInput: any = {cardTitlePub : "", message : "", imagen : ""};
  @Input() indexInput: number = 0;
  @Output() selectPub = new EventEmitter<any>();
  
  

  constructor(@Inject(DOCUMENT) public document: Document, public auth:AuthService, private router: Router, private service: ArticlesService) { 
    
  }
  
  

  detailPubEdit(index: number){
    this.router.navigate(['products/editArticle', index]);
  }

  deletePublication(index: number){
    console.log("Articulo a borrar #",index);
    this.service.deleteObjectInLocalStorage(index);
    this.router.navigate(['/home']);
  }

}
