import { Component, OnInit, Input } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { PerfilesService } from '../../services/perfiles.service';
import { CursorError } from '@angular/compiler/src/ml_parser/lexer';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  @Input()id;
  perfiles;
  sub;

  constructor(private _Activatedroute:ActivatedRoute, private _router:Router, perfilesService:PerfilesService) {
    this.sub=this._Activatedroute.paramMap.subscribe(params => { 
        console.log(params);
        this.id = params.get('id'); 
        
      });
    this.perfiles = perfilesService.getPerfiles(this.id);
  }

  ngOnInit() {
  }

}
