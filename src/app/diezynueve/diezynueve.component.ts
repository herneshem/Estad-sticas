import { Input, NgModule } from '@angular/core';
import { Component } from '@angular/core';


@Component({
    selector: 'app-diezynueve',
    templateUrl: './diezynueve.component.html',
    styleUrls: ['../app.component.css']
  })

  export class DiezynueveComponent{
    @Input ()casapadre:any;
    @Input ()cuartopadre:any
    @Input ()banopadre:any
    @Input ()terrazapadre:any
    @Input ()cocinapadre:any



  }