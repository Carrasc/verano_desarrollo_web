import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.scss'],
  
})
export class InformacionComponent implements OnInit {
  
  public activeLang = 'es';

	constructor( private translate: TranslateService){
      this.translate.setDefaultLang(this.activeLang);
  }

	public cambiarLenguaje(lang) {
    	this.activeLang = lang;
    	this.translate.use(lang);
  }
  images = [1, 2, 3].map(() => 'https://picsum.photos/900/500?random&t=${Math.random()}');

  ngOnInit() {
  }

}