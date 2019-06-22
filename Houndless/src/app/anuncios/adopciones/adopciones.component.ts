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

  constructor(adopcionesService: AdopcionesService) {
    this.adopciones = adopcionesService.getAdopciones();
   }

  ngOnInit() {
  }

}
