import { Injectable, OnInit } from '@angular/core';
import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';

@Injectable({
  providedIn: 'root'
})
export class LocationService extends Geolocation implements OnInit {
  
  private actual_latitude = -20.3728438;
  private actual_longitude = -41.9626096;

  constructor() {
    super();

    let watch = this.watchPosition();
		watch.subscribe((data: Geoposition) => {
			// data can be a set of coordinates, or an error (if an error occurred).
			this.actual_latitude = data.coords.latitude;
			this.actual_longitude = data.coords.longitude;
		});
  }

  ngOnInit()
  {
    
  }

  private deg2rad(x: number): number {
    return x * Math.PI / 180;
  }

  distance(latitude: number, longidude: number): number
  {
    let lat1 = this.deg2rad(this.actual_latitude);
    let lat2 = this.deg2rad(latitude);
    let lon1 = this.deg2rad(this.actual_longitude);
    let lon2 = this.deg2rad(longidude);

    // formula Haversine
    let dist = (6371 * Math.acos(Math.cos(lat1) * Math.cos(lat2) * Math.cos(lon2 - lon1) + Math.sin(lat1) * Math.sin(lat2)));

    dist *= 1000; // em metros
    
    return dist;
  }

  getActualLoc()
  {
    return {
      latitude: this.actual_latitude,
      longitude: this.actual_longitude
    };
  }

}
