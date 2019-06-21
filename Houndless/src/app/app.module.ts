import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Module anuncios
import { AnunciosModule } from './anuncios/anuncios.module';

// Module perfiles
import { PerfilesModule } from './perfiles/perfiles.module'

import { AppComponent } from './app.component';
import { TituloComponent } from './components/titulo/titulo.component';
import { NavbarComponent } from './components/navbar/navbar.component';

// Componentes del module anuncios
import { AnuncioComponent } from './anuncios/anuncio/anuncio.component';
import { NuevoAnuncioComponent } from './anuncios/nuevo-anuncio/nuevo-anuncio.component';

// Componentes del module perfiles
import { PerfilComponent } from './perfiles/perfil/perfil.component';
import { FormNuevoUsuarioComponent } from './perfiles/form-nuevo-usuario/form-nuevo-usuario.component';

// El router 
import { Routes, RouterModule } from '@angular/router';

// Module de angular para las forms
import { FormsModule }   from '@angular/forms';
//npm install @angular/forms --save

//Module de angular para translate
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
//npm install @ngx-translate/core @ngx-translate/http-loader --save

const routes: Routes = [
    {
        path: '',
        component: AnuncioComponent
    },
    {
        path: 'nuevoAnuncio',
        component: NuevoAnuncioComponent
    },
    {
      path: 'perfil_usuario',
      component: PerfilComponent
    },
    {
      path: 'nuevo_usuario',
      component: FormNuevoUsuarioComponent
    }

];

@NgModule({
  declarations: [
    AppComponent,
    TituloComponent,
    NavbarComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AnunciosModule,
    PerfilesModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => {
          return new TranslateHttpLoader(http);
        },
        deps: [ HttpClient ]
      }
    })
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
