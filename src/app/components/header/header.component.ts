import { Component, Inject} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { AuthService } from '@auth0/auth0-angular';
import { ProfileService } from 'src/app/services/profile.service';
import { ArticlesService } from 'src/app/services/articles.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{
  
  

  constructor(@Inject(DOCUMENT) public document: Document, public auth:AuthService, private service: ProfileService,private serviceArt:ArticlesService) {  
    this.service.getOnlineUser();
  }

  cerrarSesion(){
    this.serviceArt.deleteCartList();
  }
  
}