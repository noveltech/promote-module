import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { environment } from '@environments/environment';
import 'leaflet';

declare let L;

@Component({
  selector: 'app-location-picker-modal',
  templateUrl: './location-picker-modal.component.html',
  styleUrls: ['./location-picker-modal.component.scss'],
})
export class LocationPickerModalComponent implements OnInit {
  onlineTiles = L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      maxZoom: 19,
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }
  );

  mapOptions: L.MapOptions = {
    layers: [this.onlineTiles],
    preferCanvas: true,
    fadeAnimation: true,
    markerZoomAnimation: true,
    bounceAtZoomLimits: true,
    zoomAnimation: true,
    zoomControl: false,
    center: L.latLng(
      environment.cityCenter.latitude,
      environment.cityCenter.longitude
    ),
    zoom: 15,
  };

  private map: L.Map;

  selectedLocationMarker: L.Marker;
  selectedCoordinates: L.LatLng;

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  onMapReady(map: L.Map) {
    this.map = map;

    setTimeout((_) => {
      this.map.invalidateSize();
    }, 400);
  }

  onMapClicked(ev: any) {
    const coordinates = ev.latlng;

    if (!this.selectedLocationMarker) {
      this.selectedLocationMarker = L.marker(
        {
          lat: coordinates.lat,
          lng: coordinates.lng,
        },
        {
          icon: L.divIcon({
            iconSize: [30, 42],
            iconAnchor: [15, 42],
            className: 'map-marker-container',
            html: `<div class='map-marker inner-circle'></div>`,
          }),
        }
      );

      this.map.addLayer(this.selectedLocationMarker);
    }

    this.selectedCoordinates = coordinates;
    this.selectedLocationMarker.setLatLng(this.selectedCoordinates);
  }

  onConfirm() {
    if (!this.selectedCoordinates) {
      return;
    }

    this.modalCtrl.dismiss(
      {
        coordinates: this.selectedCoordinates,
      },
      'confirm'
    );
  }

  onCancel() {
    this.modalCtrl.dismiss(null, 'canceled');
  }
}
