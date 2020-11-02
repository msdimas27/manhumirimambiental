import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CampeaoPage } from './campeao.page';

const routes: Routes = [
  {
    path: '',
    component: CampeaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CampeaoPageRoutingModule {}
