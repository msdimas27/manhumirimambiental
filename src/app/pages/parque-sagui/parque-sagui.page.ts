import { Component, OnInit } from '@angular/core';
import { PageContentInput } from 'src/app/shared/page-content/page-content.component';
import { LocaisService } from 'src/app/shared/services/locais.service';
import { DescricoesService } from 'src/app/shared/services/descricoes.service';

@Component({
  selector: 'app-parque-sagui',
  templateUrl: './parque-sagui.page.html',
  styleUrls: ['./parque-sagui.page.scss'],
})
export class ParqueSaguiPage implements OnInit {

  input: PageContentInput;

  constructor(
      private locaisService: LocaisService,
      private descricoesService: DescricoesService
    ) { }

  ngOnInit() {

    let nome = 'PARQUE DO SAGUI'

    let desc = this.descricoesService.getByName(nome);

    this.input = {
      img_src: `assets/images/${nome}.jpg`,
      locs: [this.locaisService.getByNome(nome)],
      texto_loc: 'Visite a cooperativa.',
      texto_curto: desc.texto_curto,
      texto_longo: desc.texto_longo,
      titulo: desc.titulo
    };
  }
}
