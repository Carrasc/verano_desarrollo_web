import { Component, OnInit } from '@angular/core';
import {AnunciosService}  from '../../services/anuncios.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'anuncio',
  templateUrl: './anuncio.component.html',
  styleUrls: ['./anuncio.component.scss'],
  providers: [AnunciosService]
})
export class AnuncioComponent implements OnInit {
  anuncios;
  public activeLang = 'es';

  constructor(anunciosService: AnunciosService, private translate: TranslateService) { 
    this.anuncios = anunciosService.getAnuncios();
    this.translate.setDefaultLang(this.activeLang);
  }

	public cambiarLenguaje(lang) {
    	this.activeLang = lang;
    	this.translate.use(lang);
  	}

  ngOnInit() {
  }

}
