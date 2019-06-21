import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnuncioComponent } from './anuncio/anuncio.component';
import { NuevoAnuncioComponent } from './nuevo-anuncio/nuevo-anuncio.component';
import { FormsModule }   from '@angular/forms';

//Module de angular para translate
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
//npm install @ngx-translate/core @ngx-translate/http-loader --save

@NgModule({
  declarations: [AnuncioComponent, NuevoAnuncioComponent],
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
    AnuncioComponent
  ]
})
export class AnunciosModule { }
