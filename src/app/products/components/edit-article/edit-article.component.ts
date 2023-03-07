import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticlesService } from 'src/app/services/articles.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit{
  
  forma: FormGroup;
  picDog:any;
  id:any;
  
  
  constructor(private fb:FormBuilder, private service: ArticlesService, private route: ActivatedRoute,  private router: Router, private serviceProfile: ProfileService) {
    this.forma = this.fb.group({});
    this.creaForm();
  }

  ngOnInit(): void {
    this.route.params.subscribe(paramsId => {
      this.id = paramsId['id'];
    })
    
    let resp = this.service.getLocalStoragePostPublication(this.id); ///consultando serv.
      console.log(resp);
      this.chageForm(resp);
}

chageForm(data:any){ //cargar el form con data almacenada devuelta por el serv. getLocalStoragePostPublication()
  let mydata = data;
  this.forma = this.fb.group({
    cardTitlePub: [mydata.cardTitlePub],
    message : [mydata.message],
    imagen : [mydata.imagen],
    item_id : [mydata.item_id]
  })
  
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
  
  guardar(datosUser:any){
  
    if (this.forma.status === 'INVALID') {
      console.log("Aún faltan campos del formulario por ingresar, revise por favor!");
      return
    }
    console.log("Se está actualizando.....");
    
    let obj = {
      cardTitlePub : this.forma.get('cardTitlePub')?.value,
      message : this.forma.get('message')?.value,
      imagen : this.forma.get('imagen')?.value,
      id_user : this.serviceProfile.getUser(),
      item_id : this.forma.get('item_id')?.value
    }
    console.log(obj);
    console.log("ID###",this.id);
    
    this.service.postChangeObjectInLocalStorage(obj,this.id);
    

    this.router.navigate(['/products']);
  }
  

  

}
