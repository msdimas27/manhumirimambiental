import { Component, OnInit } from '@angular/core';
import { PageContentInput } from '../../../shared/page-content/page-content.component';
import { LocaisService } from 'src/app/shared/services/locais.service';
import { DescricoesService } from '../../../shared/services/descricoes.service';

@Component({
  selector: 'app-cooperativa-coleta',
  templateUrl: './cooperativa-coleta.page.html',
  styleUrls: ['./cooperativa-coleta.page.scss'],
})
export class CooperativaColetaPage implements OnInit {

  input: PageContentInput;

  constructor(
      private locaisService: LocaisService,
      private descricoesService: DescricoesService
    ) { }

  ngOnInit() {

    let nome = 'COOPERATIVA AGUAPÉ'

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
