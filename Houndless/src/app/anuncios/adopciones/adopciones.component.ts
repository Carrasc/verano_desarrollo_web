import { Component, OnInit} from '@angular/core';
import {AdopcionesService} from '../../services/adopciones.service';


@Component({
  selector: 'app-adopciones',
  templateUrl: './adopciones.component.html',
  styleUrls: ['./adopciones.component.scss'],
  providers: [AdopcionesService]
})
export class AdopcionesComponent implements OnInit {
  adopciones;
  test = [];

  constructor(adopcionesService: AdopcionesService) {
    this.adopciones = adopcionesService.getAdopciones();
    for (let i in this.adopciones){
      this.test[i] = this.adopciones[i].tags;
      console.log(this.test[i]);
    }
   }


  ngOnInit() {
  }

}
