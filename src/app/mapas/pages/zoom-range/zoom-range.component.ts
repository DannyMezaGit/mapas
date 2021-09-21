//* Angular
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

//* MapBox
import * as mapboxgl from 'mapbox-gl';


@Component({
  selector: 'app-zoom-range',
  templateUrl: './zoom-range.component.html',
  styles: [
    `
      .mapa-container{
        width: 100%;
        height: 100%;
      }

      .row {
        background-color: white;
        border-radius: 5px;
        bottom: 50px;
        left: 50px;
        padding: 10px;

        position: fixed;
        z-index: 999;
      }
  `
  ]
})
export class ZoomRangeComponent implements AfterViewInit {

  @ViewChild('mapa') divMapa!: ElementRef;

  mapa!: mapboxgl.Map;
  constructor() { }
  ngAfterViewInit(): void {
    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [ -109.93178353150681, 27.48371843025329 ],
      zoom: 13
    });
  }

  zoomOut() {
    this.mapa.zoomOut();
  }

  zoomIn() {
    this.mapa.zoomIn();
  }

}
