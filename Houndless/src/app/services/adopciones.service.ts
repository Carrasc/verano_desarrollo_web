import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdopcionesService {

  constructor() { }

  getAdopciones(){
    return[{
      id:"1",
      img_path:"assets/imgs/7.jpg",
      titulo:"Cachorro herido de la pata",
      descripcion:"Encontré un perrito por los puentes de santa fe, tiene una herida en la pata derecha y está muy flaco. Lo voy a llevar a una veterinaria cerca de Santa Fe a tratar las heridas.",
      raza: "Chihuahua",
      estado: "CDMX",
      municipio: "Cuajimalpa",
      tags: ["perro", "herido", "gris"],
      usuario: "luiscbilbao@gmail.com"
    },{
      id:"2",
      img_path:"assets/imgs/8.jpg",
      titulo:"Cachorro con desnutrición",
      descripcion:"Encontré un perrito por los puentes de santa fe, tiene una herida en la pata derecha y está muy flaco. Lo voy a llevar a una veterinaria cerca de Santa Fe a tratar las heridas.",
      raza: "Otro",
      estado: "Puebla",
      municipio: "Puebla",
      tags: ["perro", "herido", "negro"],
      usuario: "luiscbilbao@gmail.com"
    },{
      id:"3",
      img_path:"assets/imgs/9.jpg",
      titulo:"Perrito con cáncer",
      descripcion:"Encontré un perrito por los puentes de santa fe, tiene una herida en la pata derecha y está muy flaco. Lo voy a llevar a una veterinaria cerca de Santa Fe a tratar las heridas.",
      raza: "Gran Danés",
      estado: "CDMX",
      municipio: "Álvaro Obregón",
      tags: ["perro", "herido", "verde"],
      usuario: "luiscbilbao@gmail.com"
    }
    ];
  }
}
