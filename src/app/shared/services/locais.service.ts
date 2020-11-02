import { Injectable } from '@angular/core';

import * as LocaisJSON from '@assets/locais.json';
import { ILocal, ILocalJSON } from '../../model/locais.model';
import { LocationService } from './location.service';

@Injectable({
  providedIn: 'root'
})
export class LocaisService {

  locais: ILocalJSON = LocaisJSON['default'];

  constructor(private locService: LocationService) { }

  get(): ILocalJSON
  {
    return this.locais;
  }

  getByNome(nome: string) {
    return this.getAllLocs().find((value: ILocal) => value.nome == nome);
  }

  getByKey(key: string) {
    return this.getAllLocs().filter((value: ILocal) => value.key == key);
  }

  getAllLocs(): ILocal[]
  {
    let r = [];
    for(let key in this.locais)
    {
      r = r.concat(this.locais[key].map(x => {
        x.key = key;
        return x;        
      }));
    }

    return r;
  }

  getAllLocsWithDistance()
  {
    let locais = this.getAllLocs();

    locais = locais.map(loc => {
      let dist = this.locService.distance(loc.latitude, loc.longitude);
      loc['dist'] = dist;
      return loc;
    })
    .sort((a, b) => a['dist'] - b['dist']);

    return locais;
  }
}
