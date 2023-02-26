import { DOCUMENT } from '@angular/common';
import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  
  @Input() dataInput: any = {cardTitlePub : "", message : "", imagen : ""};
  @Input() indexInput: number = 0;
  @Output() selectPub = new EventEmitter<any>();

  constructor(@Inject(DOCUMENT) public document: Document, public auth:AuthService, private router: Router) {}
  
  detailPub(index: number){
    this.router.navigate(['/publicationDetails', index]);
  }
  
  addCart(){
    console.log("************Función addCart Pub#",this.indexInput);
    this.selectPub.emit(this.indexInput);
  }
}
