import { Component, OnInit } from '@angular/core';
import {AsociacionesService} from '../../services/asociaciones.service';

@Component({
  selector: 'app-asociaciones',
  templateUrl: './asociaciones.component.html',
  styleUrls: ['./asociaciones.component.scss'],
  providers: [AsociacionesService]
})
export class AsociacionesComponent implements OnInit {
  asociaciones;
  constructor(asociacionesService: AsociacionesService) {
    this.asociaciones = asociacionesService.getAsociaciones();
  }

  ngOnInit() {
  }

}
