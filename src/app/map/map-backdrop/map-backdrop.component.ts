import { Component, OnInit } from '@angular/core';
import { LocaisService } from '../../shared/services/locais.service';
import { ILocal } from 'src/app/model/locais.model';
import { LocationService } from '../../shared/services/location.service';
import { Geoposition } from '@ionic-native/geolocation/ngx';
import { EventServerService } from 'src/app/shared/services/event-server.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-map-backdrop',
  templateUrl: './map-backdrop.component.html',
  styleUrls: ['./map-backdrop.component.scss'],
})
export class MapBackdropComponent implements OnInit {

  constructor(
    private locaisService: LocaisService,
    private locService: LocationService,
    private ess: EventServerService,
    public router: Router
  ) { }

  enableBackdropDismiss = false;
  showBackdrop = false;
  shouldPropagate = false;

  filterState = {
    'lixeiras': true,
    'cooperativa': true,
    'parque': true,
    'pilhas': true,
    'pracas': true
  };

  onClick()
  {
    console.log("cu");
  }

  botoes = [
    {
      name: 'PEVS',
      class: 'pevs-button ma-overline',
      key: 'pilhas'
    },
    {
      name: 'COOPERATIVA',
      class: 'cooperativa-button ma-overline' ,
      key: 'cooperativa'
    },
    {
      name: 'PRAÇAS',
      class: 'pracas-button ma-overline',
      key: 'pracas'
    },
    {
      name: 'LIXEIRAS',
      class: 'lixeiras-button ma-overline',
      key: 'lixeiras'
    },
    {
      name: 'PARQUE',
      class: 'parque-button ma-overline',
      key: 'parque'
    }
  ]

  locs_prox: ILocal[] = [];
  lixeira_prox: ILocal = null;

  ngOnInit() {
    let pos = this.locService.watchPosition();
    pos.subscribe((value: Geoposition) => {
      this.locs_prox = this.locaisService
        .getAllLocsWithDistance();

      this.locs_prox.forEach((local: ILocal) => {
        if(local.key == 'lixeiras')
        {
          this.lixeira_prox = local;
          return;
        }
      })
      this.locs_prox.length = 3;
    })

    this.ess.get('filter')
      .emit(this.filterState);
  }

  toggleFilter(key: string)
  {
    this.filterState[key] = !this.filterState[key];
    this.ess.get('filter')
      .emit(this.filterState);
  }

  toParque()
  {
    this.router.navigate(['/parque-sagui']);
  }

}
