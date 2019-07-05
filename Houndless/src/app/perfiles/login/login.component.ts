import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { NuevoUsuario } from '../../models/nuevo-usuario';
import { first } from 'rxjs/operators';


import { AuthenticationService }from '../../services/authentication.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';
  correo;
  contrasenia;
  nuevo_usuario : NuevoUsuario;

  constructor(private router: Router, private authenticationService: AuthenticationService) { 
    this.nuevo_usuario = new NuevoUsuario();
  }

  ngOnInit() {
    this.authenticationService.logout();
  }

  enviar(){
    this.submitted = true;
    this.loading = true;
    console.log(""+this.correo+" " +this.contrasenia);
    this.authenticationService.login(this.correo, this.contrasenia)
        .pipe(first())
        .subscribe(
            data => {
                this.router.navigate([""]);
            },
            error => {
                this.error = error;
                this.loading = false;
            });
  }

}
