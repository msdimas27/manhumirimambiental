import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocaisService } from 'src/app/shared/services/locais.service';
import { DescricoesService } from 'src/app/shared/services/descricoes.service';

@Component({
  selector: 'app-praca',
  templateUrl: './praca.page.html',
  styleUrls: ['./praca.page.scss'],
})
export class PracaPage implements OnInit {

  constructor(
    private locaisService: LocaisService,
      private descricoesService: DescricoesService,
      private activeRoute: ActivatedRoute
  ) { }

  name = '';
  input = null;
  desc = null;

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      this.name = params['id'];
      this.name = this.name.replace(/_/g, ' ');
    });

    this.desc = this.descricoesService.getByName(this.name);

    this.input = {
      img_src: `assets/images/${this.name}.jpg`,
      locs: [this.locaisService.getByNome(this.name)],
      texto_loc: 'Visite...',
      texto_curto: this.desc.texto_curto,
      texto_longo: this.desc.texto_longo,
      titulo: this.desc.titulo
    };
  }

  capitalize(text: string){
    return text.split(' ').map(word => {
      if(word.length > 1)
      {
        return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
      }
      return word;
    }).join(' ');
  }
}
