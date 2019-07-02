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

  constructor(private anunciosService: AnunciosService, private dialogAdoptar: MatDialog) { 
  }

  ngOnInit() {
    this.getAnuncios();
  }

  getAnuncios() {
    this.anuncios = [];
    this.anunciosService.getAnuncios().subscribe((data: {}) => {
      console.log(data);
      this.anuncios = data;
    });
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
