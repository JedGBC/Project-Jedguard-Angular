import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { ArticlesService } from 'src/app/services/articles.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent {
  
  forma: FormGroup;
  picDog:any;
  
  constructor(private fb:FormBuilder, private service: ArticlesService,  private router: Router, private serviceProfile: ProfileService) {
    let valor = this.oneDogPic();
    console.log("****123 ",valor);
    this.forma = this.fb.group({});
    this.creaForm();
  }

  creaForm(){
    this.forma = this.fb.group({
      cardTitlePub : ['',[
        Validators.required,
        Validators.minLength(1), 
        Validators.maxLength(50)
      ]], 
      message: ['',[
        Validators.required,
        Validators.minLength(1), 
        Validators.maxLength(108)
      ]], 
      imagen: ['',[
        Validators.required
      ]]
    });
  }
  
  registrar(datosUser:any){
    if (this.forma.status === 'INVALID') {
      console.log("Aún faltan campos del formulario por ingresar, revise por favor!");
      return
    }
    console.log("Se esta registrando.....");
    
    //localStorage.setItem("a",a)
    let obj = {
      cardTitlePub : this.forma.get('cardTitlePub')?.value,
      message : this.forma.get('message')?.value,
      imagen : localStorage.getItem("picDog"),
      id_user : this.serviceProfile.getUser(),
      item_id : Date.now().toString()
    }
    console.log("Objeto creado",obj);
    
    this.service.postPublication(obj);

    this.router.navigate(['/products']);
  }

  oneDogPic(){
    this.service.getOnePic().subscribe(dogsImageR =>{
      this.picDog = dogsImageR;
      this.picDog = this.picDog.message;
      localStorage.setItem("picDog",this.picDog);
      return
    })
  }

}
