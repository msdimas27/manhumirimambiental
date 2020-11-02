import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NovoJogoPage } from './novo-jogo.page';

const routes: Routes = [
  {
    path: '',
    component: NovoJogoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NovoJogoPageRoutingModule {}
