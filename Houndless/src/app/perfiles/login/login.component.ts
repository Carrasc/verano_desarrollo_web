import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { NuevoUsuario } from '../../models/nuevo-usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  nuevo_usuario : NuevoUsuario;

  constructor(private router: Router) { 
    this.nuevo_usuario = new NuevoUsuario();
  }

  ngOnInit() {
  }

  enviar(){
    this.router.navigate(['']);
  }

}
