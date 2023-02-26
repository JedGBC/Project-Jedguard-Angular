import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface pubs{
  cardTitlePub : string,
  message : string,
  imagen : string
}
@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  private pubsDB:any = [];

  private newDataPublication : any = {
  cardTitlePub : 'Pequeño Affenpinsher', 
  message : 'Hola estoy buscando un hogar que me pueda acoger, por favor sé mi guardián.',
  imagen : './assets/img/affenpninsher.jpg'};
  
  private dataPublications:any = [ //DATA BASE PARA RELLENO
    {cardTitlePub : 'Rescatado hermoso perrito', 
    message : 'Hola estoy buscando un hogar fui abandonado en la calle, Adoptame!',
    imagen : ''},
    {cardTitlePub : 'Rescatado hermoso perrito', 
    message : 'Hola estoy buscando un hogar fui abandonado en la calle, Adoptame!',
    imagen : ''},
    {cardTitlePub : 'Rescatado hermoso perrito', 
    message : 'Hola estoy buscando un hogar fui abandonado en la calle, Adoptame!',
    imagen : ''},
    {cardTitlePub : 'Rescatado hermoso perrito', 
    message : 'Hola estoy buscando un hogar fui abandonado en la calle, Adoptame!',
    imagen : ''},
    {cardTitlePub : 'Rescatado hermoso perrito', 
    message : 'Hola estoy buscando un hogar fui abandonado en la calle, Adoptame!',
    imagen : ''},
    {cardTitlePub : 'Rescatado hermoso perrito', 
    message : 'Hola estoy buscando un hogar fui abandonado en la calle, Adoptame!',
    imagen : ''},
    {cardTitlePub : 'Rescatado hermoso perrito', 
    message : 'Hola estoy buscando un hogar fui abandonado en la calle, Adoptame!',
    imagen : ''},
    {cardTitlePub : 'Rescatado hermoso perrito', 
    message : 'Hola estoy buscando un hogar fui abandonado en la calle, Adoptame!',
    imagen : ''},
    {cardTitlePub : 'Rescatado hermoso perrito', 
    message : 'Hola estoy buscando un hogar fui abandonado en la calle, Adoptame!',
    imagen : ''},
    {cardTitlePub : 'Rescatado hermoso perrito', 
    message : 'Hola estoy buscando un hogar fui abandonado en la calle, Adoptame!',
    imagen : ''},
    {cardTitlePub : 'Rescatado hermoso perrito', 
    message : 'Hola estoy buscando un hogar fui abandonado en la calle, Adoptame!',
    imagen : ''},
    {cardTitlePub : 'Rescatado hermoso perrito', 
    message : 'Hola estoy buscando un hogar fui abandonado en la calle, Adoptame!',
    imagen : ''},
    {cardTitlePub : 'Rescatado hermoso perrito', 
    message : 'Hola estoy buscando un hogar fui abandonado en la calle, Adoptame!',
    imagen : ''},
    {cardTitlePub : 'Rescatado hermoso perrito', 
    message : 'Hola estoy buscando un hogar fui abandonado en la calle, Adoptame!',
    imagen : ''},
    {cardTitlePub : 'Rescatado hermoso perrito', 
    message : 'Hola estoy buscando un hogar fui abandonado en la calle, Adoptame!',
    imagen : ''}
  ];

  private urlApi = 'https://dog.ceo/api/breeds/image/random';

  constructor(private http:HttpClient) { }

  getDogsPictures():Observable<any>{
    let cant = this.dataPublications.length;
    console.log("Is hited : ArticlesService.getDogsPictures()",cant);
    return this.http.get(this.urlApi+'/'+cant);
  }
  
  getPublications(){
    console.log("Is hited : ArticlesService.getPublications()");
    let X = this.integratePubs();
    sessionStorage.setItem("publicacionesWeb", JSON.stringify(X)); //almaceno en sessionStorage
    console.log("***Data de publicaciones del getPublications() guardada en SesionStorage***");
    //JSON.parse(sessionStorage.getItem("publicacionesWeb") || "[]"); //para rescatar la data
    return X;
  }

  private integratePubs(){
    
    this.pubsDB = [];
    console.log(this.pubsDB);

    this.pubsDB.push(this.newDataPublication);
    console.log(this.pubsDB);
    
    for (let index = 0; index < this.dataPublications.length; index++) {
      const img = JSON.parse(sessionStorage.getItem("picsServiceResponse") || "[]");
      this.dataPublications[index].imagen = img[index];
    }
    
    
    for (let index = 0; index < this.dataPublications.length; index++) {
    this.pubsDB.push(this.dataPublications[index]);
    }
    
    console.log(this.pubsDB);
    return this.pubsDB;

    
  }

  getPubsDetail(id:any){
    console.log(this.pubsDB);
    return this.pubsDB[id];
  }
  
  getOnePic(){
    return this.http.get(this.urlApi);
  }

  postPublication(value:any){
    //debugger;
    let check : number;
    
    check = Number(localStorage.getItem("check"));
    

    if (check === 0 ||
      check === null || 
    check === undefined) {
      localStorage.setItem("postPublication",JSON.stringify(value));
      localStorage.setItem("check","1");
      console.log("°°°°°°°°°°°°°°°°°°1==0");
    } else {
      console.log("°°°°°°°°°°°°°°°°°°2>0");
      let value2 =[];
      
      if (check === 1) {
        console.log("°°°°°°°°°°°°°°°°°°2.1",check);
        let value1 = JSON.parse(localStorage.getItem("postPublication") || "[]");
        let check2 = Number(localStorage.getItem("check2"));
        if (check2 === 1) {
          value2 = value1;
        } else {
          value2.push(value1);
        }
        value2.push(value);
        localStorage.setItem("postPublication",JSON.stringify(value2));
        check=check+1;
        localStorage.setItem("check2","0");
        localStorage.setItem("check",check.toString());
      } else if (check > 1) {
        let value1 = JSON.parse(localStorage.getItem("postPublication") || "[]");
        for (let index = 0; index < check; index++) {
          value2.push(value1[index]);
        }
        value2.push(value);
        localStorage.setItem("postPublication",JSON.stringify(value2)); 
        console.log("°°°°°°°°°°°°°°°°°°2.2",check);
        check=check+1;
        localStorage.setItem("check",check.toString());
      }
    }
  }

    
  getLocalStoragePostPublication(id:any){
    console.log(id);
    
    let value = JSON.parse(localStorage.getItem("postPublication") || "[]");
    console.log("*** getLocalStoragePostPublication() devuelve objeto a editar***");
    return value[id]; //retornamos el object
    
  }

  postChangeObjectInLocalStorage(obj:any,id:any){
    console.log("*** postChangeObjectInLocalStorage() Se edita el objeto correctamente***");
    let value = JSON.parse(localStorage.getItem("postPublication") || "[]");
    console.log("Valor antiguo: ",value[id]);
    value[id] = obj;
    console.log("Valor Nuevo: ",value[id]);
    localStorage.setItem("postPublication",JSON.stringify(value));
    return console.log("Se actualizo el valor correctamente del obj:",value[id]);
  }

  deleteObjectInLocalStorage(id:any){
    //debugger;
    console.log("*** deleteObjectInLocalStorage() Se eliminara el objeto #***",id);
    let check : number;
    check = Number(localStorage.getItem("check"))-1;
    if (check === 1) {
      localStorage.setItem("check2","1");
    }
    localStorage.setItem("check",check.toString());
    if (check === 0) {
      localStorage.removeItem('check');
      localStorage.removeItem('check2');
      localStorage.removeItem('postPublication');
      return console.log("Actualizando Almacenamiento: VACIO");
    } else {
      let value = JSON.parse(localStorage.getItem("postPublication") || "[]");
      value.splice(id,1);
      localStorage.setItem("postPublication",JSON.stringify(value));
      return console.log("Actualizando Almacenamiento:",value);
    }
    
    
  }
}
