import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParqueSaguiPageRoutingModule } from './parque-sagui-routing.module';

import { ParqueSaguiPage } from './parque-sagui.page';
import { PageContentModule } from '../../shared/page-content/page-content.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParqueSaguiPageRoutingModule,
    PageContentModule
  ],
  declarations: [ParqueSaguiPage]
})
export class ParqueSaguiPageModule {}
