import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Practica clase Angular (Este titulo esta dentro de app.component.ts)';
  variable2 = 'Otra variable'

  calificacion = 80;

  leDiClick($event){
    this.title = "Click";
    console.log("Click", $event);
  }

  leDiClick2($event){
    this.title = "Click";
    console.log("Click2", $event);
  }

}
