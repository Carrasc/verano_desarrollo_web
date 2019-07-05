import { Component, OnInit, Input } from '@angular/core';
import { NuevoAnuncio } from '../../models/nuevo-anuncio';
import { AnunciosService } from '../../services/anuncios.service';

import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-nuevo-anuncio',
  templateUrl: './nuevo-anuncio.component.html',
  styleUrls: ['./nuevo-anuncio.component.scss']
})
export class NuevoAnuncioComponent implements OnInit {
  nuevo_anuncio : NuevoAnuncio;
  stringTags:string;
  razas=["Chihuahua", "Pastor Alemán", "Beagle", "Doverman", "Pitbull", "Bulldog", "Golden Retreiever", "Xochoizquintle", "San Bernardo", "Sahueso", "Criollo"];
  selectedFile:File;
  @Input() correo;

  constructor(private router: Router, private anunciosService: AnunciosService) { 
    this.nuevo_anuncio = new NuevoAnuncio();
  }

  ngOnInit() {
    console.log("PLS: " + this.correo);
  }

  enviar(){
    this.nuevo_anuncio.tags = this.stringTags.split(",");
    this.nuevo_anuncio.perfilId = localStorage.getItem('correo');
    this.nuevo_anuncio.img_path = "assets/imgs/" + this.selectedFile.name;

    this.anunciosService.addAnuncio(this.nuevo_anuncio)
    .subscribe(
      res => {
          this.router.navigate(['']);
          //console.log("El pelash");
      },
      err => {
          console.log("CHUPA");
      });
  }

  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
  }
}
