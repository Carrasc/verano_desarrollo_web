import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdopcionesService {

  constructor() { }

  getAdopciones(){
    return[{
      img_path:"assets/imgs/7.jpg",
      titulo:"Cachorro herido de la pata",
      descripcion:"Encontré un perrito por los puentes de santa fe, tiene una herida en la pata derecha y está muy flaco. Lo voy a llevar a una veterinaria cerca de Santa Fe a tratar las heridas.",
      raza: "Chihuahua",
      estado: "CDMX",
      municipio: "Cuajimalpa"
    },{
      img_path:"assets/imgs/8.jpg",
      titulo:"Cachorro con desnutrición",
      descripcion:"Encontré un perrito por los puentes de santa fe, tiene una herida en la pata derecha y está muy flaco. Lo voy a llevar a una veterinaria cerca de Santa Fe a tratar las heridas.",
      raza: "Otro",
      estado: "Puebla",
      municipio: "Puebla"
    },{
      img_path:"assets/imgs/9.jpg",
      titulo:"Perrito con cáncer",
      descripcion:"Encontré un perrito por los puentes de santa fe, tiene una herida en la pata derecha y está muy flaco. Lo voy a llevar a una veterinaria cerca de Santa Fe a tratar las heridas.",
      raza: "Gran Danés",
      estado: "CDMX",
      municipio: "Álvaro Obregón"
    }
    ];
  }
}
