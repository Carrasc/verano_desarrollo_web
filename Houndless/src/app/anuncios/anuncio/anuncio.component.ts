import { Component, OnInit } from '@angular/core';
import {AnunciosService}  from '../../services/anuncios.service';

@Component({
  selector: 'anuncio',
  templateUrl: './anuncio.component.html',
  styleUrls: ['./anuncio.component.scss'],
  providers: [AnunciosService]
})
export class AnuncioComponent implements OnInit {
  anuncios;
  test = [];

  constructor(anunciosService: AnunciosService) { 
    
    this.anuncios = anunciosService.getAnuncios();
    for (let i in this.anuncios){
      this.test[i] = this.anuncios[i].tags;
      console.log(this.test[i]);
    }
    
  }

  ngOnInit() {
  }
  

}
