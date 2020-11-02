import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StorageService } from 'src/app/shared/services/storage.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-novo-jogo',
  templateUrl: './novo-jogo.page.html',
  styleUrls: ['./novo-jogo.page.scss'],
})
export class NovoJogoPage implements OnInit {

  subs: {
    [key: string]: Subscription
  } = {};
  num_jogadores = 1;

  base_avatar = 'assets/game/avatares/blank.svg';
  jogadores = [{ url: this.base_avatar, name:'Jogador 1' }, { url: this.base_avatar, name:'Jogador 2' }];

  constructor(
    private storage: StorageService
  ) { }

  ngOnInit() {
    this.num_jogadores = this.storage.get<number>('num_jogadores') || this.num_jogadores;
    this.jogadores[0] = this.storage.get<any>('jogador_0') || this.jogadores[0];
    this.jogadores[1] = this.storage.get<any>('jogador_1') || this.jogadores[1];

    this.subs['num_jogadores'] = this.storage
      .watch<any>('num_jogadores')
      .subscribe(num_jogadores => {
        this.num_jogadores = num_jogadores;
      });
    
    this.subs['jogador_0'] = this.storage
      .watch<any>('jogador_0')
      .subscribe(jogador => {
        this.jogadores[0] = jogador;
      });

    this.subs['jogador_1'] = this.storage
      .watch<any>('jogador_1')
      .subscribe(jogador => {
        this.jogadores[1] = jogador;
      });
  }

  ngOnDestroy()
  {
    console.log('destrui novo_jogo');
    Object.keys(this.subs).forEach(key => {
      this.subs[key].unsubscribe();
    })
  }

}
