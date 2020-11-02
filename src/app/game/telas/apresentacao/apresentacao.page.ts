import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../../shared/services/storage.service';

@Component({
  selector: 'app-apresentacao',
  templateUrl: './apresentacao.page.html',
  styleUrls: ['./apresentacao.page.scss'],
})
export class ApresentacaoPage implements OnInit {

  constructor(private storage: StorageService) { }

  ngOnInit() {
    // this.storage.watch('num_jogadores')
    //   .subscribe(value => {
    //   console.log(value);
    // })
  }

  click(num_jogadores: number)
  {
    this.storage.set('num_jogadores', num_jogadores);
  }
}
