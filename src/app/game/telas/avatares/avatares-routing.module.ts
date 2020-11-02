import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AvataresPage } from './avatares.page';

const routes: Routes = [
  {
    path: '',
    component: AvataresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AvataresPageRoutingModule {}
