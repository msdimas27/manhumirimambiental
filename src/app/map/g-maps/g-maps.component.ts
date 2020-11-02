import { MapTypeStyle } from '@agm/core/services/google-maps-types';
import { Component, OnInit } from '@angular/core';
import { Geoposition } from '@ionic-native/geolocation/ngx';
import { EventServerService } from '../../shared/services/event-server.service';
import { LocaisService } from '../../shared/services/locais.service';
import { LocationService } from '../../shared/services/location.service';
import { ILocal } from 'src/app/model/locais.model';
import { Router } from '@angular/router';

@Component({
	selector: 'app-g-maps',
	templateUrl: './g-maps.component.html',
	styleUrls: ['./g-maps.component.scss'],
})
export class GMapsComponent implements OnInit {

	constructor(
		private locService: LocationService,
		private locaisService: LocaisService,
		private ess: EventServerService,
		private router: Router) { }

	lat: number = -20.3728438;
	lng: number = -41.9626096;
	marker_lat = this.lat;
	marker_lng = this.lng;
	zoom: number = 15;

	lista_locais: ILocal[] = [];
	filterState = {};

	ngOnInit() {

		let watch = this.locService.watchPosition();
		watch.subscribe((data: Geoposition) => {
			this.marker_lat = this.lat = data.coords.latitude;
			this.marker_lng = this.lng = data.coords.longitude;
		});

		this.lista_locais = this.locaisService.getAllLocs();

		this.ess.get('location-card_click')
			.subscribe((local: ILocal) => {
				this.router.navigate(['/home'])
					.then((value: boolean) => {
						this.lat = local.latitude;
						this.lng = local.longitude;
					});
			});
		
		this.ess.get('filter')
			.subscribe(filterState => {
				this.filterState = filterState;
			})
	}

	// https://developers.google.com/maps/documentation/javascript/style-reference
	mapStyle: MapTypeStyle[] = [
		{
			featureType: 'poi',
			stylers: [{ visibility: 'off' }]
		},
	];

	getMarkerIcon(key: string): string
	{
		switch(key)
		{
			case 'lixeiras': {
				return '../../../assets/markers/lixeiras.svg';
			}
			case 'cooperativa': {
				return '../../../assets/markers/cooperativa.svg';
			}
			case 'parque': {
				return '../../../assets/markers/parque.svg';
			}
			case 'pilhas': {
				return '../../../assets/markers/pilhas.svg';
			}
			case 'pracas': {
				return '../../../assets/markers/pracas.svg';
			}
		}
	}

	markerClick(loc: ILocal)
	{
		this.ess.get('marker_click')
			.emit(loc);
	}

	ngOnDestroy()
	{
		console.log('gmaps destruido');
	}

}
