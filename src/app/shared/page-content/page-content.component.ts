import { Component, OnInit, Input } from '@angular/core';
import { ILocal } from '../../model/locais.model';

export type PageContentInput = {
  titulo: string,
  img_src: string,
  texto_curto: string[],
  texto_longo: string[],
  texto_loc: string,
  locs: ILocal[]
};

@Component({
  selector: 'app-page-content',
  templateUrl: './page-content.component.html',
  styleUrls: ['./page-content.component.scss'],
})
export class PageContentComponent implements OnInit {

  @Input('input') input: PageContentInput;
  texto_longo_open = false;
  
  constructor() { }

  ngOnInit() { }

}
