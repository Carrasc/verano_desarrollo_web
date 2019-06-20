import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AnunciosModule } from './anuncios/anuncios.module';

import { AppComponent } from './app.component';
import { TituloComponent } from './components/titulo/titulo.component';
import { NavbarComponent } from './components/navbar/navbar.component';

// Componentes del module anuncios
import { AnuncioComponent } from './anuncios/anuncio/anuncio.component';
import { NuevoAnuncioComponent } from './anuncios/nuevo-anuncio/nuevo-anuncio.component';

// El router 
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: AnuncioComponent
    },
    {
        path: 'nuevoAnuncio',
        component: NuevoAnuncioComponent
    }

];

@NgModule({
  declarations: [
    AppComponent,
    TituloComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AnunciosModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
