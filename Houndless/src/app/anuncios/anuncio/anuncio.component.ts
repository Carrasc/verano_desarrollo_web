import { Component, OnInit } from '@angular/core';
import {AnunciosService}  from '../../services/anuncios.service';
import { MatDialog, MatDialogConfig } from "@angular/material";
import { DonarComponent } from 'src/app/anuncios/donar/donar.component';


@Component({
  selector: 'anuncio',
  templateUrl: './anuncio.component.html',
  styleUrls: ['./anuncio.component.scss'],
  providers: [AnunciosService]
})
export class AnuncioComponent implements OnInit {
  anuncios;
  test = [];

  constructor(anunciosService: AnunciosService, private dialogAdoptar: MatDialog) { 
    
    this.anuncios = anunciosService.getAnuncios();
    for (let i in this.anuncios){
      this.test[i] = this.anuncios[i].tags;
      console.log(this.test[i]);
    }
    
  }

  ngOnInit() {
  }

  onCreateDonacion(){
    const dialogConfigAdopcion = new MatDialogConfig();
    dialogConfigAdopcion.disableClose = false;
    dialogConfigAdopcion.autoFocus = true;
    dialogConfigAdopcion.width = "700px";
    dialogConfigAdopcion.height = "auto";
  
    this.dialogAdoptar.open(DonarComponent, dialogConfigAdopcion);
  }

}
