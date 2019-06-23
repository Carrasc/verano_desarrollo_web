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
    if(this.dialogAnuncio.openDialogs.length==0){
      this.dialogAnuncio.open(NuevoAnuncioComponent);
    }
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "70%";
    //this.dialogAnuncio.open(NuevoAnuncioComponent);
  }

  onCreateAdopcion(){
    if(this.dialogAdopcion.openDialogs.length==0){
      this.dialogAdopcion.open(NuevaAdopcionComponent);
    }
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "70%";
    //this.dialogAdopcion.open(NuevaAdopcionComponent);
  }

}
