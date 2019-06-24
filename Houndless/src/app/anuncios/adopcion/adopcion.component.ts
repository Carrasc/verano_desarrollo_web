import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogConfig } from "@angular/material";
import { AdoptarComponent } from 'src/app/anuncios/adoptar/adoptar.component';

@Component({
  selector: 'adopcion-app',
  templateUrl: './adopcion.component.html',
  styleUrls: ['./adopcion.component.scss']
})
export class AdopcionComponent implements OnInit {
  @Input() data;
  @Input() tags;
  constructor(private dialogAdoptar: MatDialog) {  }
  ngOnInit() {
  }

  onCreateAdopcion2(){
    const dialogConfigAdopcion = new MatDialogConfig();
    dialogConfigAdopcion.disableClose = false;
    dialogConfigAdopcion.autoFocus = true;
    dialogConfigAdopcion.width = "700px";
    dialogConfigAdopcion.height = "auto";
  
    this.dialogAdoptar.open(AdoptarComponent, dialogConfigAdopcion);
  }

}
