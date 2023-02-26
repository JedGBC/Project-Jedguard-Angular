import { Component } from '@angular/core';
import { ArticlesService } from './services/articles.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularProyectoFinal_JGBC';
  
  multiplesPicsDogs:any;
  constructor(private serviceA:ArticlesService) { }
  
  ngOnInit(): void {
    this.listDogs(); // se inicializa una sola vez para que cargue la data al iniciar la app.
  }

  listDogs(){
    this.serviceA.getDogsPictures().subscribe(dogsImageR =>{
      this.multiplesPicsDogs = dogsImageR.message;
      console.log("***Data de imagenes de perritos del endpoint https://dog.ceo/api/breeds/image/random guardada en SesionStorage***");
      //console.log(typeof this.multiplesPicsDogs,":",this.multiplesPicsDogs);
      sessionStorage.setItem("picsServiceResponse",JSON.stringify(this.multiplesPicsDogs));
      //sessionStorage.clear();//borrando la data en sessionStorage.
    })
  }

}
