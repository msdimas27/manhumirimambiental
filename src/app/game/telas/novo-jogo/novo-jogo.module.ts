import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NovoJogoPageRoutingModule } from './novo-jogo-routing.module';

import { NovoJogoPage } from './novo-jogo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NovoJogoPageRoutingModule
  ],
  declarations: [NovoJogoPage]
})
export class NovoJogoPageModule {}
