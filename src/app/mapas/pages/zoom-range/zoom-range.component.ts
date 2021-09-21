//* Angular
import { Component, OnInit } from '@angular/core';

//* MapBox
import * as mapboxgl from 'mapbox-gl';


@Component({
  selector: 'app-zoom-range',
  templateUrl: './zoom-range.component.html',
  styles: [
    `
      #mapa{
        width: 100%;
        height: 100%;
      }

  `
  ]
})
export class ZoomRangeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    var map = new mapboxgl.Map({
      container: 'mapa',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [ -109.93178353150681, 27.48371843025329 ],
      zoom: 13
    });

  }

}
