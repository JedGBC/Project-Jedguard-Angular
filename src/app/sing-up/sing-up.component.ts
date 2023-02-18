import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})

export class SingUpComponent implements OnInit{
  
  forma: FormGroup;

  constructor(private fb:FormBuilder) {
    this.forma = this.fb.group({}); //inicializar en vacio el formulario
    this.creaForm();
  }

  ngOnInit(): void {
    console.log("FormGroup",this.forma);
    console.log("Controls:",this.forma.controls);
  }

  creaForm(){
    this.forma = this.fb.group({
      nombre : ['',[Validators.required,Validators.minLength(3)]], //validators.required hace que sea obligatorio y requerido este lleno este campo
      apellidos: ['',[Validators.required,Validators.minLength(3)]],
      correo: ['',[Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]]
    });
  }

  guardar(){
    if (this.forma.status === 'INVALID') {
      console.log("Aún faltan campos del formulario por ingresar, revise por favor!");
      return
    }
    console.log(this.forma);
  }
}