import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'adopcion-app',
  templateUrl: './adopcion.component.html',
  styleUrls: ['./adopcion.component.scss']
})
export class AdopcionComponent implements OnInit {
  @Input() data;
  @Input() tags;
  constructor() {  }
  ngOnInit() {
  }

}
