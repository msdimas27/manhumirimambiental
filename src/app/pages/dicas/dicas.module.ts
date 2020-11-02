import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DicasPageRoutingModule } from './dicas-routing.module';

import { DicasPage } from './dicas.page';
import { DicasPage as DP2 } from './dicas/dicas.page';
import { CuriosidadesPage } from './curiosidades/curiosidades.page';
import { CardModule } from '../../shared/card/card.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DicasPageRoutingModule,
    CardModule
  ],
  declarations: [DicasPage, DP2, CuriosidadesPage]
})
export class DicasPageModule {}
