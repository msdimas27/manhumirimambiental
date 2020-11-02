import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LixoEletronicoPage } from './lixo-eletronico.page';

const routes: Routes = [
  {
    path: '',
    component: LixoEletronicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LixoEletronicoPageRoutingModule {}
