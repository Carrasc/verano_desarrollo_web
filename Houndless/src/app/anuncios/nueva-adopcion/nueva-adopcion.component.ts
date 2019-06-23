import { Component, OnInit } from '@angular/core';
import { NuevaAdopcion } from '../../models/nueva-adopcion';
import {Router, ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-nueva-adopcion',
  templateUrl: './nueva-adopcion.component.html',
  styleUrls: ['./nueva-adopcion.component.scss']
})
export class NuevaAdopcionComponent implements OnInit {
  nueva_adopcion : NuevaAdopcion;
  razas=["Chihuahua", "Paston Alemán", "Beagle", "Doverman", "Pitbull", "Bulldog", "Golden Retreiever", "Xochoizquintle", "San Bernardo", "Sahueso", "Criollo"];
  selectedFile: File;

  constructor(private router: Router) {
    this.nueva_adopcion = new NuevaAdopcion();
  }

  ngOnInit() {
  }

  enviar(){
    
     this.router.navigate(['',this.nueva_adopcion]);
     console.log(this.nueva_adopcion);
  }

  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
  }

}
