import { CommonModule } from '@angular/common';
import {Component, OnInit} from '@angular/core';
import { addIcons } from 'ionicons';
import { mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp } from 'ionicons/icons';
import {LeafletModule} from "@asymmetrik/ngx-leaflet";
import * as L from 'leaflet';
import {IonicModule} from "@ionic/angular";
import {WindyMapComponent} from "./windy-map/windy-map.component";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [LeafletModule, CommonModule, IonicModule, WindyMapComponent],
})
export class AppComponent implements OnInit{
  public appPages = [
    { title: 'Inbox', url: '/folder/inbox', icon: 'mail' },
    { title: 'Outbox', url: '/folder/outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {
    addIcons({ mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp });
  }

  // protected map!: L.Map;
  // private heatLayer?: L.Layer;
  //
  // protected mapOptions = {
  //   zoom: 7,
  //   center: L.latLng({lat: -37, lng: 145})
  // } as L.MapOptions;
  //
  // onMapReady(map: L.Map) {
  //   this.map = map;
  //   this.initializeMap();
  //   // this.loadPointGeoJSON();
  //   this.invalidateSize();
  // }
  //
  // initializeMap() {
  //   L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  //     attribution: '&copy; OpenStreetMap contributors',
  //   }).addTo(this.map);
  // }

  ngOnInit() {
    console.log('AppComponent ngOnInit');
  }

  // private invalidateSize = () => {
  //   setTimeout(() => this.map.invalidateSize(true), 0);
  // };
}
