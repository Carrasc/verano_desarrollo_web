import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
//npm install @ngx-translate/core @ngx-translate/http-loader --save

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public activeLang = 'es';

	constructor( private translate: TranslateService){
      this.translate.setDefaultLang(this.activeLang);
      
  }

	public cambiarLenguaje(lang) {
    	this.activeLang = lang;
    	this.translate.use(lang);
  	}

  ngOnInit() {
  }

}
