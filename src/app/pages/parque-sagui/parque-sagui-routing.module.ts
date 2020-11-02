import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParqueSaguiPage } from './parque-sagui.page';

const routes: Routes = [
  {
    path: '',
    component: ParqueSaguiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParqueSaguiPageRoutingModule {}
