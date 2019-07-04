import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { NuevoUsuario } from './models/nuevo-usuario';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentUser:NuevoUsuario;

  constructor(private authenticationService: AuthenticationService){
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }
  

}
