import { AfterViewInit, Component, OnInit } from '@angular/core';
import { IonicModule } from "@ionic/angular";
import { CommonModule } from "@angular/common";
import { LeafletModule } from "@asymmetrik/ngx-leaflet";

declare let L: any;
declare let windyInit: any;

@Component({
  selector: 'app-windy-map',
  templateUrl: './windy-map.component.html',
  styleUrls: ['./windy-map.component.scss'],
  imports: [LeafletModule, CommonModule, IonicModule],
  standalone: true
})
export class WindyMapComponent implements OnInit, AfterViewInit {
  private map!: any;

  constructor() { }

  ngOnInit(): void {
    // Load Leaflet library
    const leafletScript = document.createElement('script');
    leafletScript.src = 'https://unpkg.com/leaflet@1.4.0/dist/leaflet.js';
    leafletScript.onload = () => {
      // Load Windy API script after Leaflet is loaded
      console.log('Leaflet loaded');
      const windyScript = document.createElement('script');
      windyScript.src = 'https://api.windy.com/assets/map-forecast/libBoot.js';
      windyScript.onload = () => {
        console.log('Windy API loaded');
        this.initMap();
      };
      document.head.appendChild(windyScript);
    };
    document.head.appendChild(leafletScript);
  }

  ngAfterViewInit(): void {
    // Initialization moved to script onload event
    console.log('ngAfterViewInit');
  }

  private initMap(): void {
    const options = {
      key: 'N6y5L7Sz33b3VWOZegWfuP6Tjj12IRy6', // Replace with your actual API key
      verbose: true,
      lat: -37.8136,
      lon: 144.9631,
      zoom: 10,
    };

    windyInit(options, (windyAPI: any) => {
      const { map } = windyAPI;
      this.map = map;

      this.invalidateSize();
    });
  }

  private invalidateSize = () => {
    setTimeout(() => this.map.invalidateSize(true), 0);
  };
}
