import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormNuevoUsuarioComponent } from './form-nuevo-usuario/form-nuevo-usuario.component';
import { PerfilComponent } from './perfil/perfil.component';
import { FormsModule }   from '@angular/forms';

import { AsociacionesComponent } from './asociaciones/asociaciones.component';
import { AsociacionComponent } from './asociacion/asociacion.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

//Module de angular para translate
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [FormNuevoUsuarioComponent, PerfilComponent, AsociacionesComponent, AsociacionComponent, LoginComponent, SignupComponent],
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
    PerfilComponent,
    FormNuevoUsuarioComponent,
    AsociacionesComponent,
    LoginComponent,
    SignupComponent,
  ]
})
export class PerfilesModule { }
