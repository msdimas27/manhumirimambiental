import { Component, OnInit } from '@angular/core';
import { PageContentInput } from 'src/app/shared/page-content/page-content.component';
import { LocaisService } from 'src/app/shared/services/locais.service';
import { DescricoesService } from 'src/app/shared/services/descricoes.service';

@Component({
  selector: 'app-lixeiras-subterraneas',
  templateUrl: './lixeiras-subterraneas.page.html',
  styleUrls: ['./lixeiras-subterraneas.page.scss'],
})
export class LixeirasSubterraneasPage implements OnInit {

  input: PageContentInput;

  constructor(
      private locaisService: LocaisService,
      private descricoesService: DescricoesService
    ) { }

  ngOnInit() {

    let nome = 'LIXEIRA SUBTERRANEA'

    let desc = this.descricoesService.getByName(nome);
    if(!desc) {
      desc = {
        texto_curto: [],
        texto_longo: [],
        titulo: 'Lexeiras Subterrâneas'
      }
    }

    this.input = {
      img_src: `assets/images/${nome}.jpg`,
      locs: this.locaisService.getByKey('lixeiras'),
      texto_loc: 'Rotas',
      texto_curto: desc.texto_curto,
      texto_longo: desc.texto_longo,
      titulo: desc.titulo
    };
  }

}
