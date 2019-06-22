import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-asociacion',
  templateUrl: './asociacion.component.html',
  styleUrls: ['./asociacion.component.scss']
})
export class AsociacionComponent implements OnInit {
  @Input() asociacion;
  
  constructor() { }

  ngOnInit() {
  }

}
