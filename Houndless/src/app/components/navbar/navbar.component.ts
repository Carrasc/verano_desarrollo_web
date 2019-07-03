import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
//npm install @ngx-translate/core @ngx-translate/http-loader --save

import { MatDialog, MatDialogConfig } from "@angular/material";
import { NuevoAnuncioComponent } from 'src/app/anuncios/nuevo-anuncio/nuevo-anuncio.component';
import { NuevaAdopcionComponent } from 'src/app/anuncios/nueva-adopcion/nueva-adopcion.component';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public activeLang = 'es';
  router: Router;

	constructor( private translate: TranslateService, private dialogAnuncio: MatDialog, private dialogAdopcion: MatDialog, private _router: Router){
      this.translate.setDefaultLang(this.activeLang);
      this.router = _router;      
  }

	public cambiarLenguaje(lang) {
    	this.activeLang = lang;
    	this.translate.use(lang);
  }

  ngOnInit() {
  }

  onCreateAnuncio(){
    // If para solo tener un solo pop-up abierto al mismo tiempo
    const dialogConfigAnuncio = new MatDialogConfig();
    dialogConfigAnuncio.disableClose = false;
    dialogConfigAnuncio.autoFocus = false;
    dialogConfigAnuncio.width = "60%";
    dialogConfigAnuncio.height = "80%";
    if(this.dialogAnuncio.openDialogs.length==0)
    {
      this.dialogAnuncio.open(NuevoAnuncioComponent, dialogConfigAnuncio);
    }
    //this.dialogAnuncio.open(NuevoAnuncioComponent);
  }

  onCreateAdopcion(){
    const dialogConfigAdopcion = new MatDialogConfig();
    dialogConfigAdopcion.disableClose = false;
    dialogConfigAdopcion.autoFocus = false;
    dialogConfigAdopcion.width = "60%";
    dialogConfigAdopcion.height = "80%";
    if(this.dialogAdopcion.openDialogs.length==0)
    {
      this.dialogAdopcion.open(NuevaAdopcionComponent, dialogConfigAdopcion);
    }
    //this.dialogAdopcion.open(NuevaAdopcionComponent);
  }

}
