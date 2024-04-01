import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { last } from 'rxjs';

@Component({
  selector: 'app-hall-details',
  templateUrl: './hall-details.component.html',
  styleUrl: './hall-details.component.css'
})
export class HallDetailsComponent implements OnInit{
  zoom = 12;
  center: google.maps.LatLngLiteral={lat:26.651385,lng:15.826474};
  options: google.maps.MapOptions = {
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 8,
    styles:[
      { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
      { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
      { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
      {
          featureType: "administrative.locality",
          elementType: "labels.text.fill",
          stylers: [{ color: "#d59563" }],
      },
      {
          featureType: "poi",
          elementType: "labels.text.fill",
          stylers: [{ color: "#d59563" }],
      },
      {
          featureType: "poi.park",
          elementType: "geometry",
          stylers: [{ color: "#263c3f" }],
      },
      {
          featureType: "poi.park",
          elementType: "labels.text.fill",
          stylers: [{ color: "#6b9a76" }],
      },
      {
          featureType: "road",
          elementType: "geometry",
          stylers: [{ color: "#38414e" }],
      },
      {
          featureType: "road",
          elementType: "geometry.stroke",
          stylers: [{ color: "#212a37" }],
      },
      {
          featureType: "road",
          elementType: "labels.text.fill",
          stylers: [{ color: "#9ca5b3" }],
      },
      {
          featureType: "road.highway",
          elementType: "geometry",
          stylers: [{ color: "#746855" }],
      },
      {
          featureType: "road.highway",
          elementType: "geometry.stroke",
          stylers: [{ color: "#1f2835" }],
      },
      {
          featureType: "road.highway",
          elementType: "labels.text.fill",
          stylers: [{ color: "#f3d19c" }],
      },
      {
          featureType: "transit",
          elementType: "geometry",
          stylers: [{ color: "#2f3948" }],
      },
      {
          featureType: "transit.station",
          elementType: "labels.text.fill",
          stylers: [{ color: "#d59563" }],
      },
      {
          featureType: "water",
          elementType: "geometry",
          stylers: [{ color: "#17263c" }],
      },
      {
          featureType: "water",
          elementType: "labels.text.fill",
          stylers: [{ color: "#515c6d" }],
      },
      {
          featureType: "water",
          elementType: "labels.text.stroke",
          stylers: [{ color: "#17263c" }],
      },
  ],
}
 marker={
  position: {
    lat: this.center.lat,
    lng: this.center.lng,
  },
  label: {
    color: 'red',
    text: 'Marker label ',
  },
  title: 'Galaxy holl ',
  options: { animation: google.maps.Animation.BOUNCE },
};
constructor(private _Route:Router){}

ngOnInit(): void {
  navigator.geolocation.getCurrentPosition(() => {
    this.center = {
      lat: this.center.lat,
      lng: this.center.lng
      // lng: position.coords.longitude,
    };
  });
}

  zoomIn() {
    if (this.zoom < 12) this.zoom++;
  }

  zoomOut() {
    if (this.zoom > 8) this.zoom--;
  }

  Reserve(){
    this._Route.navigate(['/client/Reservation'])
  }
}

