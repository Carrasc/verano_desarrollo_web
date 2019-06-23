import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnunciosService {

  constructor() { }

  getAnuncios(){
    return[{
      id: "1",
      img_path:"assets/imgs/2.jpg",
      titulo:"Cachorro herido de la pata",
      descripcion:"Encontré un perrito por los puentes de santa fe, tiene una herida en la pata derecha y está muy flaco. Lo voy a llevar a una veterinaria cerca de Santa Fe a tratar las heridas.",
      raza: "Chihuahua",
      coordenadas:["12345", "54321"],
      estado: "CDMX",
      municipio: "Cuajimalpa",
      tags: ["perro", "herido", "negro"],
      usuario: "luiscbilbao@gmail.com"
    },{
      id: "2",
      img_path:"assets/imgs/3.jpg",
      titulo:"Cachorro con desnutrición",
      descripcion:"Encontré un perrito por los puentes de santa fe, tiene una herida en la pata derecha y está muy flaco. Lo voy a llevar a una veterinaria cerca de Santa Fe a tratar las heridas.",
      raza: "Otro",
      coordenadas:["34512", "48391"],
      estado: "Puebla",
      municipio: "Puebla",
      tags: ["perro", "herido", "blanco", "sad"],
      usuario: "pelagio3@gmail.com"
    },{
      id: "3",
      img_path:"assets/imgs/4.jpg",
      titulo:"Perrito con cáncer",
      descripcion:"Encontré un perrito por los puentes de santa fe, tiene una herida en la pata derecha y está muy flaco. Lo voy a llevar a una veterinaria cerca de Santa Fe a tratar las heridas.",
      raza: "Gran Danés",
      coordenadas:["17647", "98930"],
      estado: "CDMX",
      municipio: "Álvaro Obregón",
      tags: ["perro", "herido", "gris"],
      usuario: "alexmarcelo@gmail.com"
    }
    ];
  }
}
