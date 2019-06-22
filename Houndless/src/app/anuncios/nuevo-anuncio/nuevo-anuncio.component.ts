import { Component, OnInit } from '@angular/core';
import { NuevoAnuncio} from '../../models/nuevo-anuncio';
import { TranslateService } from '@ngx-translate/core';

import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-nuevo-anuncio',
  templateUrl: './nuevo-anuncio.component.html',
  styleUrls: ['./nuevo-anuncio.component.scss']
})
export class NuevoAnuncioComponent implements OnInit {
  nuevo_anuncio : NuevoAnuncio;
  public activeLang = 'es';
  razas=["Chihuahua", "Paston Alemán", "Beagle", "Doverman", "Pitbull", "Bulldog", "Golden Retreiever", "Xochoizquintle", "San Bernardo", "Sahueso", "Criollo"];

  constructor(private router: Router, private translate: TranslateService) { 
    this.nuevo_anuncio = new NuevoAnuncio();
    this.translate.setDefaultLang(this.activeLang);
  }

  public cambiarLenguaje(lang) {
    this.activeLang = lang;
    this.translate.use(lang);
  }

  ngOnInit() {
  }

  enviar(){
    
   this.router.navigate(['',this.nuevo_anuncio]);
    console.log(this.nuevo_anuncio);
  }

}
