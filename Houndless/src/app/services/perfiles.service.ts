import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PerfilesService {

  constructor() { }

  getPerfiles(id:string){
    var perfiles = [{
      id:"1",
      nombre:"Luis Fernando Carrasco",
      correo:"luis@gmail.com",
      celular: "5541303478",
      contrasenia: "contra",
      paypal_link: "link/link"
    },{
      id:"2",
      nombre:"Daniel Pelagio",
      correo:"daniel@gmail.com",
      celular: "5541303478",
      contrasenia: "contra2"
    },{
      id:"3",
      nombre:"Alexadro Marcelo",
      correo:"alex@gmail.com",
      celular: "5541303478",
      contrasenia: "contra3"
    }
    ];

    for (var key in perfiles){
      if (perfiles[key].id == id )
      {
        return perfiles[key];
      }
    }
    return [{}];
  }
}
