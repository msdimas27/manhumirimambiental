import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LixoEletronicoPageRoutingModule } from './lixo-eletronico-routing.module';

import { LixoEletronicoPage } from './lixo-eletronico.page';
import { PageContentModule } from '../../shared/page-content/page-content.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LixoEletronicoPageRoutingModule,
    PageContentModule
  ],
  declarations: [LixoEletronicoPage]
})
export class LixoEletronicoPageModule {}
