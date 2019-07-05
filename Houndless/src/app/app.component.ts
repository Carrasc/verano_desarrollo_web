import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { NuevoUsuario } from './models/nuevo-usuario';

import { AuthGuard } from './guards/auth.guard';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentUser:NuevoUsuario;
  correo;

  constructor(private authenticationService: AuthenticationService){
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    this.correo = this.authenticationService.currentUserEmailV;
  }


}
