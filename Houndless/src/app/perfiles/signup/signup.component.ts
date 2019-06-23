import { Component, OnInit } from '@angular/core';
import { NuevoUsuario } from '../../models/nuevo-usuario';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  nuevo_usuario : NuevoUsuario;
  constructor(private router: Router) { 
    this.nuevo_usuario = new NuevoUsuario();
  }
  

  ngOnInit() {
  }

  enviar(){
    this.router.navigate(['/login']);
  }

}
