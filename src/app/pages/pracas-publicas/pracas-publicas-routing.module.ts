import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PracasPublicasPage } from './pracas-publicas.page';

const routes: Routes = [
  {
    path: '',
    component: PracasPublicasPage
  },
  {
    path: ':id',
    loadChildren: () => import('./praca/praca.module').then(m => m.PracaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PracasPublicasPageRoutingModule {}
