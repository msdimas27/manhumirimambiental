import { Injectable, OnInit } from '@angular/core';
import * as DescricoesJSON from '../../../assets/descricoes.json';

@Injectable({
  providedIn: 'root'
})
export class DescricoesService {

  private descricoes = DescricoesJSON['default'];
  private descricoes_map = {};

  constructor(){
    // inicialização desc_map
    for(let key in this.descricoes)
    {
      for(let desc of this.descricoes[key])
      {
        desc['key'] = key;
        this.descricoes_map[desc['nome']] = desc;
      }
    }
  }


  getByName(name: string)
  {
    return this.descricoes_map[name];
  }
}
