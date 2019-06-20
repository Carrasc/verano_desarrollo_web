import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnuncioComponent } from './anuncio/anuncio.component';
import { NuevoAnuncioComponent } from './nuevo-anuncio/nuevo-anuncio.component';

@NgModule({
  declarations: [AnuncioComponent, NuevoAnuncioComponent],
  imports: [
    CommonModule
  ],
  exports: [
    NuevoAnuncioComponent,
    AnuncioComponent
  ]
})
export class AnunciosModule { }
