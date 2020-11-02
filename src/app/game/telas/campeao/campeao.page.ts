import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/shared/services/storage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-campeao',
  templateUrl: './campeao.page.html',
  styleUrls: ['./campeao.page.scss'],
})
export class CampeaoPage implements OnInit {

  subs: {
    [key: string]: Subscription
  } = {};
  num_jogadores = 1;
  solo = true;

  base_avatar = 'assets/game/avatares/blank.svg';
  jogadores = [{ url: this.base_avatar, name:'Jogador 1' }, { url: this.base_avatar, name:'Jogador 2' }];
  pontuacao = [0, 0];

  jogador_campeao = 0;
  empate = false;

  constructor(
    private storage: StorageService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.num_jogadores = this.storage.get<number>('num_jogadores') || this.num_jogadores;
    this.solo = this.num_jogadores == 1;
    this.jogadores[0] = this.storage.get<any>('jogador_0') || this.jogadores[0];
    this.jogadores[1] = this.storage.get<any>('jogador_1') || this.jogadores[1];
    this.pontuacao = this.storage.get<any>('pontuacao') || this.pontuacao;
    this.storage.set('pontuacao', [0, 0]);
    this.setPontuacao();

    // this.subs['num_jogadores'] = this.storage
    //   .watch<any>('num_jogadores')
    //   .subscribe(num_jogadores => {
    //     this.num_jogadores = num_jogadores;
    //     this.solo = this.num_jogadores == 1;
    //   });

    // this.subs['jogador_0'] = this.storage
    //   .watch<any>('jogador_0')
    //   .subscribe(jogador => {
    //     this.jogadores[0] = jogador;
    //   });

    // this.subs['jogador_1'] = this.storage
    //   .watch<any>('jogador_1')
    //   .subscribe(jogador => {
    //     this.jogadores[1] = jogador;
    //   });

    // this.subs['pontuacao'] = this.storage
    //   .watch<any[]>('pontuacao')
    //   .subscribe(pontuacao => {
    //     this.pontuacao = pontuacao;
    //     this.storage.set('pontuacao', [0, 0]);
    //     this.setPontuacao();
    //   });
  }

  setPontuacao()
  {
    if(this.solo)
    {
      this.empate = false;
      this.jogador_campeao = 0;
    }
    else
    {
      this.empate = this.pontuacao[0] === this.pontuacao[1];
      this.jogador_campeao = this.pontuacao[0] >= this.pontuacao[1] ? 0 : 1; 
    }
  }

  ngOnDestroy()
  {
    console.log('destrui campeao');
    this.storage.set('pontuacao', [0, 0]);
    Object.keys(this.subs).forEach(key => {
      this.subs[key].unsubscribe();
    })
  }

}
