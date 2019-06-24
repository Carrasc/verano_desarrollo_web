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
import { NuevaAdopcionComponent } from './anuncios/nueva-adopcion/nueva-adopcion.component';
import { AdopcionesComponent } from './anuncios/adopciones/adopciones.component';
import { AdopcionComponent } from './anuncios/adopcion/adopcion.component';
import {AdoptarComponent} from './anuncios/adoptar/adoptar.component';
import { DonarComponent } from './anuncios/donar/donar.component';

// Componentes del module perfiles
import { PerfilComponent } from './perfiles/perfil/perfil.component';
import { FormNuevoUsuarioComponent } from './perfiles/form-nuevo-usuario/form-nuevo-usuario.component';
import { AsociacionesComponent} from './perfiles/asociaciones/asociaciones.component';
import { LoginComponent } from './perfiles/login/login.component';
import { SignupComponent } from './perfiles/signup/signup.component';

// Componente del module informacion
import { InformacionComponent } from './components/informacion/informacion.component';

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

import {MatDialogModule} from '@angular/material/dialog';
import  { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// npm install --save @angular/material @angular/cdk @angular/animations
// Meter a imports MatDialogModule y BrowserAnimationsModule. Exportar MatDialogueModule
// Luego meter a entryComponent el componente a ser mostrado en el pop up 
// Finalmente agregar al algular.json, styles -> "input": "node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css"

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
      path: 'perfil_usuario/:id',
      component: PerfilComponent
    },
    {
      path: 'nuevo_usuario',
      component: FormNuevoUsuarioComponent
    },
    {
      path: 'nuevaAdopcion',
      component: NuevaAdopcionComponent
    }
    ,
    {
      path:"informacion",
      component: InformacionComponent
    },
    {
      path:'adopciones',
      component: AdopcionesComponent
    },
    {
      path:'asociaciones',
      component: AsociacionesComponent
    },
    {
      path:'login',
      component: LoginComponent
    },
    {
      path:'signup',
      component: SignupComponent
    }
];

@NgModule({
  declarations: [
    AppComponent,
    TituloComponent,
    NavbarComponent,
    InformacionComponent,  
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
    }),
    MatDialogModule,
    BrowserAnimationsModule
  ],
  exports:[RouterModule, MatDialogModule],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [NuevaAdopcionComponent, NuevoAnuncioComponent, AdoptarComponent, DonarComponent]
})
export class AppModule { }
