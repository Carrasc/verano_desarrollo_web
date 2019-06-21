import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormNuevoUsuarioComponent } from './form-nuevo-usuario/form-nuevo-usuario.component';
import { PerfilComponent } from './perfil/perfil.component';
import { FormsModule }   from '@angular/forms';

@NgModule({
  declarations: [FormNuevoUsuarioComponent, PerfilComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    PerfilComponent,
    FormNuevoUsuarioComponent
  ]
})
export class PerfilesModule { }
