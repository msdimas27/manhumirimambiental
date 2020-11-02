import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StorageService } from '../../../shared/services/storage.service';

@Component({
  selector: 'app-avatares',
  templateUrl: './avatares.page.html',
  styleUrls: ['./avatares.page.scss'],
})
export class AvataresPage implements OnInit {

  base_avatar = 'assets/game/avatares/';
  avatares = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  selected_avatar = 'blank';
  name = '';

  id_jogador = 0;

  constructor(
    private route: ActivatedRoute,
    private storage: StorageService,
    private router: Router 
  ) { }

  ngOnInit() {
    this.route.params
      .subscribe(params => {
        this.id_jogador = params.id;

        let jogador = this.storage.get<any>(`jogador_${this.id_jogador}`);
        if(jogador) {
          this.selected_avatar = jogador.avatar;
          this.name = jogador.name;
        }
      })
  }

  avatarSrc(avatar){
    return this.base_avatar + avatar + '.svg';
  }

  clickAvatar(avatar) {
    this.selected_avatar = avatar;
  }

  clickSalvar() {
    let url = this.avatarSrc(this.selected_avatar);
    let avatar = this.selected_avatar;
    let name = this.name;

    console.log(this.id_jogador);

    this.storage.set(`jogador_${this.id_jogador}`, {
      url, name, avatar
    });

    this.router.navigate(['/game', 'novo-jogo']);
  }

}
