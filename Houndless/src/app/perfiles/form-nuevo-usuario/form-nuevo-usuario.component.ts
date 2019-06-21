import { Component, OnInit } from '@angular/core';
import { NuevoUsuario } from '../../models/nuevo-usuario';

@Component({
  selector: 'app-form-nuevo-usuario',
  templateUrl: './form-nuevo-usuario.component.html',
  styleUrls: ['./form-nuevo-usuario.component.scss']
})
export class FormNuevoUsuarioComponent implements OnInit {
  nuevo_usuario : NuevoUsuario;
  constructor() { }

  ngOnInit() {
  }

}
