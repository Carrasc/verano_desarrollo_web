import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnunciosService {

  constructor() { }

  getAnuncios(){
    return[{
      img_path:"assets/logo_houndles.jpg",
      titulo:"Cachorro herido de la pata",
      descripcion:"Encontré un perrito por los puentes de santa fe, tiene una herida en la pata derecha y está muy flaco. Lo voy a llevar a una veterinaria cerca de Santa Fe a tratar las heridas.",
      raza: "Chihuahua",
      coordenadas:["12345", "54321"],
      estado: "CDMX",
      municipio: "Cuajimalpa"
    },{
      img_path:"assets/logo_houndless.jpg",
      titulo:"Cachorro con desnutrición",
      descripcion:"Encontré un perrito por los puentes de santa fe, tiene una herida en la pata derecha y está muy flaco. Lo voy a llevar a una veterinaria cerca de Santa Fe a tratar las heridas.",
      raza: "Otro",
      coordenadas:["34512", "48391"],
      estado: "Puebla",
      municipio: "Puebla"
    },{
      img_path:"assets/logo_houndless.jpg",
      titulo:"Perrito con cáncer",
      descripcion:"Encontré un perrito por los puentes de santa fe, tiene una herida en la pata derecha y está muy flaco. Lo voy a llevar a una veterinaria cerca de Santa Fe a tratar las heridas.",
      raza: "Gran Danés",
      coordenadas:["17647", "98930"],
      estado: "CDMX",
      municipio: "Álvaro Obregón"
    }
    ];
  }
}
