import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticlesService } from 'src/app/services/articles.service';



@Component({
  selector: 'app-publication-details',
  templateUrl: './publication-details.component.html',
  styleUrls: ['./publication-details.component.css']
})
export class PublicationDetailsComponent {
  
  pubs:any;
  id:any;

  constructor(private activateRouter: ActivatedRoute, private service: ArticlesService) {
    this.activateRouter.params.subscribe(data =>{
      data['id'];
      this.id = data['id'];
      this.pubs=this.service.getPubsDetail(data['id']);
    })
  }

}
