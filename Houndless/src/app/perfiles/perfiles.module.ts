import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormNuevoUsuarioComponent } from './form-nuevo-usuario/form-nuevo-usuario.component';
import { PerfilComponent } from './perfil/perfil.component';
import { FormsModule }   from '@angular/forms';
import { AsociacionesComponent } from './asociaciones/asociaciones.component';
import { AsociacionComponent } from './asociacion/asociacion.component';

@NgModule({
  declarations: [FormNuevoUsuarioComponent, PerfilComponent, AsociacionesComponent, AsociacionComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    PerfilComponent,
    FormNuevoUsuarioComponent,
    AsociacionesComponent
  ]
})
export class PerfilesModule { }
