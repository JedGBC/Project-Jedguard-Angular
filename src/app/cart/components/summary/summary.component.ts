import { DOCUMENT } from '@angular/common';
import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { ArticlesService } from 'src/app/services/articles.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent {
  
  @Input() dataInput3: any = {cardTitlePub : "", message : "", imagen : ""};
  @Input() indexInput3: number = 0;
  @Output() selectPub3 = new EventEmitter<any>();

  constructor(@Inject(DOCUMENT) public document: Document, public auth:AuthService, private router: Router, private service: ArticlesService) { 
    
  }
  
  deletePublication2(index: number){
    console.log("Articulo a borrar del carrito #",index);
    this.service.deleteAdoptionsCartList(index);

    this.router.navigateByUrl('', { skipLocationChange: true }).then(() => { // en vez del window.location.reload(); es mas rapido
      this.router.navigate(['/cart']);
    }); 

    //window.location.reload();
  }

  contactCenter(){
    alert("Se le ha informado al dueño para coordinar la adopción.!! Te contactará en Breve!");
  }

} 
