import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DicasPage } from './dicas.page';

import { DicasPage as DP2 } from './dicas/dicas.page';
import { CuriosidadesPage } from './curiosidades/curiosidades.page';

const routes: Routes = [
  {
    path: '',
    component: DicasPage,
    children: [
      {
        path: 'dicas2',
        component: DP2
      },
      {
        path: 'curiosidades',
        component: CuriosidadesPage
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DicasPageRoutingModule { }
