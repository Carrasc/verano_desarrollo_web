import { Component, OnInit } from '@angular/core';
import { Adopcion } from '../../models/adopcion';

@Component({
  selector: 'app-adoptar',
  templateUrl: './adoptar.component.html',
  styleUrls: ['./adoptar.component.scss']
})
export class AdoptarComponent implements OnInit {
  adopcion : Adopcion;
  constructor() { 
    this.adopcion = new Adopcion();
  }

  ngOnInit() {
  }

}
