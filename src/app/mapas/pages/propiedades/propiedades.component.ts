import { Component, OnInit } from '@angular/core';
import { Propiedad, propiedades } from './propiedades.config';



@Component({
  selector: 'app-propiedades',
  templateUrl: './propiedades.component.html',
  styles: [
  ]
})


export class PropiedadesComponent implements OnInit {

  propiedades: Propiedad[] = propiedades;

  constructor() { }

  ngOnInit(): void {
  }

}
