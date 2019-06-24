import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnuncioComponent } from './anuncio/anuncio.component';
import { NuevoAnuncioComponent } from './nuevo-anuncio/nuevo-anuncio.component';
import { FormsModule }   from '@angular/forms';

//Module de angular para translate
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AdopcionesComponent } from './adopciones/adopciones.component';
import { AdopcionComponent } from './adopcion/adopcion.component';
import { NuevaAdopcionComponent } from './nueva-adopcion/nueva-adopcion.component';
import { AdoptarComponent} from './adoptar/adoptar.component';
import { DonarComponent } from './donar/donar.component';
//npm instal
@NgModule({
  declarations: [AnuncioComponent, NuevoAnuncioComponent, AdopcionesComponent, AdopcionComponent, NuevaAdopcionComponent, DonarComponent, AdoptarComponent],
  imports: [
    CommonModule,
    FormsModule,
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
  exports: [
    NuevoAnuncioComponent,
    AnuncioComponent,
    AdopcionesComponent,
    AdoptarComponent,
    DonarComponent,
    AdopcionComponent,
    NuevaAdopcionComponent
  ]
})
export class AnunciosModule { }
