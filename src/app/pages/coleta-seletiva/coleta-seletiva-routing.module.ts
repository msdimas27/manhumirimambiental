import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColetaSeletivaPage } from './coleta-seletiva.page';
import { CooperativaColetaPage } from './cooperativa-coleta/cooperativa-coleta.page';
import { DiasHorariosPage } from './dias-horarios/dias-horarios.page';
import { PontosEntregaPage } from './pontos-entrega/pontos-entrega.page';

const routes: Routes = [
  {
    path: '',
    component: ColetaSeletivaPage,
    children: [
      {
        path: 'cooperativa-coleta',
        component: CooperativaColetaPage
      },
      {
        path: 'dias-horarios',
        component: DiasHorariosPage
      },
      {
        path: 'pontos-entrega',
        component: PontosEntregaPage
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ColetaSeletivaPageRoutingModule {}
