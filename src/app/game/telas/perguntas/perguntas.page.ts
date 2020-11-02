import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/shared/services/storage.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import * as PerguntasJSON from '../../../../assets/quiz.json';

@Component({
  selector: 'app-perguntas',
  templateUrl: './perguntas.page.html',
  styleUrls: ['./perguntas.page.scss'],
})
export class PerguntasPage implements OnInit {

  subs: {
    [key: string]: Subscription
  } = {};
  num_jogadores = 1;
  solo = true;

  base_avatar = 'assets/game/avatares/blank.svg';
  jogadores = [{ url: this.base_avatar, name:'Jogador 1' }, { url: this.base_avatar, name:'Jogador 2' }];
  pontuacao = [0, 0];

  idJogador = 0;
  firstActive = true;

  idPergunta = 0;
  tempoRestante = 30;
  selected = false;

  perguntas = PerguntasJSON['default'];
  
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

    // console.log(PerguntasJSON);
    this.subs['num_jogadores'] = this.storage
      .watch<any>('num_jogadores')
      .subscribe(num_jogadores => {
        this.num_jogadores = num_jogadores;
        this.solo = this.num_jogadores == 1;
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

    this.subs['pontuacao'] = this.storage
      .watch<any>('pontuacao')
      .subscribe(pontuacao => {
        this.pontuacao = pontuacao;
      });
    
    this.route.params
      .subscribe(params => {
        this.idPergunta = parseInt(params.id);
        
        if(this.num_jogadores == 1)
        {
          this.idJogador = 0;
          this.firstActive = true;
        }
        else
        {
          this.idJogador = this.idPergunta % 2;
          this.firstActive = this.idJogador === 0;
        }

        this.setTempo();
      })
  }

  terminaRodada(intervalId: any = -1)
  {
    clearInterval(intervalId);
    setTimeout(() => {
      if(this.idPergunta + 1 < this.perguntas.length)
      {
        this.router.navigate(['/game', 'perguntas', this.idPergunta + 1]);
      }
      else
      {
        this.router.navigate(['/game', 'campeao']);
      }
    }, 2000);
  }

  selectAlternativa(alt: any)
  {
    if(this.selected)
    {
      return;
    }

    this.selected = true;
    this.tempoRestante = 0;
    if(alt.correta)
    {
      this.pontuacao[this.idJogador] += 1;
      this.storage.set('pontuacao', this.pontuacao);

    }
    
    this.terminaRodada();
  }

  setTempo()
  {
    let intervalId = setInterval(() => {
      this.tempoRestante += this.tempoRestante > 0 ? -1 : 0;

      if(!this.tempoRestante)
      {
        console.log('chama termina rodada');
        this.terminaRodada(intervalId);
      }
    }, 1000);
  }

  setPad(n: number)
  {
    return (n + '').padStart(2, '0');
  }

  ngOnDestroy()
  {
    console.log('destrui perguntas');
    Object.keys(this.subs).forEach(key => {
      this.subs[key].unsubscribe();
    })
  }

}
