import { Component, OnInit } from '@angular/core';
import { PageContentInput } from 'src/app/shared/page-content/page-content.component';
import { LocaisService } from 'src/app/shared/services/locais.service';
import { DescricoesService } from 'src/app/shared/services/descricoes.service';

@Component({
  selector: 'app-pracas-publicas',
  templateUrl: './pracas-publicas.page.html',
  styleUrls: ['./pracas-publicas.page.scss'],
})
export class PracasPublicasPage implements OnInit {

  input: PageContentInput;

  constructor(
      private locaisService: LocaisService,
      private descricoesService: DescricoesService
    ) { }
  
  name = '';

  ngOnInit() {

    let desc = {
      texto_curto: [],
      texto_longo: [],
      titulo: 'Praças Públicas'
    }

    this.input = {
      img_src: `assets/images/GETÚLIO VARGAS.jpg`,
      locs: this.locaisService.getByKey('pracas'),
      texto_loc: 'Rotas',
      texto_curto: desc.texto_curto,
      texto_longo: desc.texto_longo,
      titulo: desc.titulo
    };
  }
}
