import { Component, OnInit } from '@angular/core';
import { PageContentInput } from 'src/app/shared/page-content/page-content.component';
import { LocaisService } from 'src/app/shared/services/locais.service';
import { DescricoesService } from 'src/app/shared/services/descricoes.service';

@Component({
  selector: 'app-pontos-entrega',
  templateUrl: './pontos-entrega.page.html',
  styleUrls: ['./pontos-entrega.page.scss'],
})
export class PontosEntregaPage implements OnInit {

  input: PageContentInput;

  constructor(
      private locaisService: LocaisService,
      private descricoesService: DescricoesService
    ) { }

  ngOnInit() {

    let nome = 'AGÊNCIA DOS CORREIOS'

    let desc = this.descricoesService.getByName(nome);

    this.input = {
      img_src: `assets/images/${nome}.jpg`,
      locs: [this.locaisService.getByNome(nome)],
      texto_loc: 'Rotas',
      texto_curto: desc.texto_curto,
      texto_longo: desc.texto_longo,
      titulo: desc.titulo
    };
  }
}
