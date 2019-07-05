import { Component, OnInit } from '@angular/core';
import { NuevaAdopcion } from '../../models/nueva-adopcion';
import {Router, ActivatedRoute} from '@angular/router';
import { AdopcionesService } from 'src/app/services/adopciones.service';


@Component({
  selector: 'app-nueva-adopcion',
  templateUrl: './nueva-adopcion.component.html',
  styleUrls: ['./nueva-adopcion.component.scss']
})
export class NuevaAdopcionComponent implements OnInit {
  nueva_adopcion : NuevaAdopcion;
  stringTags:string;
  razas=["Chihuahua", "Paston Alemán", "Beagle", "Doverman", "Pitbull", "Bulldog", "Golden Retreiever", "Xochoizquintle", "San Bernardo", "Sahueso", "Criollo"];
  selectedFile: File;

  constructor(private router: Router, private adopcionService: AdopcionesService) {
    this.nueva_adopcion = new NuevaAdopcion();
  }

  ngOnInit() {
  }

  enviar(){
    
    this.nueva_adopcion.tags = this.stringTags.split(",");
    console.log("ss "+ localStorage.getItem('correo'));
    this.nueva_adopcion.perfilId = localStorage.getItem('correo');
    this.nueva_adopcion.img_path = "assets/imgs/" + this.selectedFile.name;

    this.adopcionService.addAdopcion(this.nueva_adopcion)
    .subscribe(
      res => {
          this.router.navigate(['/adopciones']);
          //console.log("El pelash");
      },
      err => {
          console.log("CHA");
      });
  }

  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
  }

}
