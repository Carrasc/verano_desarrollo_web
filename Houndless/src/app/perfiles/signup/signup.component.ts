import { Component, OnInit } from '@angular/core';
import { NuevoUsuario } from '../../models/nuevo-usuario';
import {Router, ActivatedRoute} from '@angular/router';
import { NuevoUsuarioService } from '../../services/nuevo-usuario.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  nuevo_usuario : NuevoUsuario;
  constructor(private router: Router, private nuevoUsuario:NuevoUsuarioService) { 
    this.nuevo_usuario = new NuevoUsuario();
  }
  

  ngOnInit() {
  }

  enviar(){
    this.nuevoUsuario.addPerfil(this.nuevo_usuario)
    .subscribe(
      res => {
          this.router.navigate(['/login']);
          //console.log("El pelash");
      },
      err => {
          console.log("No jaló");
      });
    //this.router.navigate(['/login']);
  }

}
