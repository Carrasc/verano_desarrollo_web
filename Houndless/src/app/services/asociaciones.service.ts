import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AsociacionesService {

  constructor() { }

  getAsociaciones(){
    return[{
      logo_path:"assets/imgs/huellitas.png",
      nombre:"Huellitas",
      descripcion:"Somos huellitas, asociacion dedicada a dar amor a los perros",
      coordenadas:["12345", "54321"],
      estado: "CDMX",
      municipio: "Cuajimalpa",
      colonia: "Lomas de Cuajimalpa",
      telefono: "555-111-567",
      correo: "correo@gmail.com",
      sitio_web: "huellitas.com"
    },{
      logo_path:"assets/imgs/11.jpeg",
      nombre:"Huellitas",
      descripcion:"Somos huellitas, asociacion dedicada a dar amor a los perros",
      coordenadas:["12345", "54321"],
      estado: "CDMX",
      municipio: "Cuajimalpa",
      colonia: "Lomas de Cuajimalpa",
      telefono: "555-111-567",
      correo: "correo@gmail.com",
      sitio_web: "huellitas.com"
    },{
      logo_path:"assets/imgs/12.jpeg",
      nombre:"Huellitas",
      descripcion:"Somos huellitas, asociacion dedicada a dar amor a los perros",
      coordenadas:["12345", "54321"],
      estado: "CDMX",
      municipio: "Cuajimalpa",
      colonia: "Lomas de Cuajimalpa",
      telefono: "555-111-567",
      correo: "correo@gmail.com",
      sitio_web: "huellitas.com"
    }
    ];
  }
}
