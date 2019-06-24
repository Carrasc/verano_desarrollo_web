import { Component, OnInit } from '@angular/core';
import { Donacion } from '../../models/donacion';


@Component({
  selector: 'app-donar',
  templateUrl: './donar.component.html',
  styleUrls: ['./donar.component.scss']
})
export class DonarComponent implements OnInit {
  donacion : Donacion;
  constructor() {
    this.donacion = new Donacion();
   }

  ngOnInit() {
  }

}
