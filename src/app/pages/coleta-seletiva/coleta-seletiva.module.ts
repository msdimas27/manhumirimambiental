import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CooperativaColetaPage } from './cooperativa-coleta/cooperativa-coleta.page';
import { DiasHorariosPage } from './dias-horarios/dias-horarios.page';
import { PontosEntregaPage } from './pontos-entrega/pontos-entrega.page';
import { ColetaSeletivaPageRoutingModule } from './coleta-seletiva-routing.module';
import { ColetaSeletivaPage } from './coleta-seletiva.page';
import { PageContentModule } from '../../shared/page-content/page-content.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ColetaSeletivaPageRoutingModule,
    PageContentModule
  ],
  declarations: [
    ColetaSeletivaPage,
    CooperativaColetaPage,
    DiasHorariosPage,
    PontosEntregaPage
  ]
})
export class ColetaSeletivaPageModule {}
