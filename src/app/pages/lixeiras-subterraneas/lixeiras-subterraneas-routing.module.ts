import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LixeirasSubterraneasPage } from './lixeiras-subterraneas.page';

const routes: Routes = [
  {
    path: '',
    component: LixeirasSubterraneasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LixeirasSubterraneasPageRoutingModule {}
