import { Component, OnInit } from '@angular/core';
import { NuevoAnuncio} from '../../models/nuevo-anuncio';

import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-nuevo-anuncio',
  templateUrl: './nuevo-anuncio.component.html',
  styleUrls: ['./nuevo-anuncio.component.scss']
})
export class NuevoAnuncioComponent implements OnInit {
  nuevo_anuncio : NuevoAnuncio;
  razas=["Chihuahua", "Paston Alemán", "Beagle", "Doverman", "Pitbull", "Bulldog", "Golden Retreiever", "Xochoizquintle", "San Bernardo", "Sahueso", "Criollo"];
  selectedFile:File;

  constructor(private router: Router) { 
    this.nuevo_anuncio = new NuevoAnuncio();
  }

  ngOnInit() {
  }

  enviar(){
    
   this.router.navigate(['',this.nuevo_anuncio]);
    console.log(this.nuevo_anuncio);
    // upload code goes here
  }

  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
  }


}
