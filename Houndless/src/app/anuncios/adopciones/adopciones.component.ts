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

  constructor(private adopcionesService: AdopcionesService) {
   }


  ngOnInit() {
    this.getAdopciones();
  }

  getAdopciones(){
    this.adopciones = [];
    this.adopcionesService.getAdopciones().subscribe((data: {}) => {
      console.log(data);
      this.adopciones = data;
    });
  }

}
