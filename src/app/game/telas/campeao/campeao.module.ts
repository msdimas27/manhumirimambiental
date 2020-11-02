import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CampeaoPageRoutingModule } from './campeao-routing.module';

import { CampeaoPage } from './campeao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CampeaoPageRoutingModule
  ],
  declarations: [CampeaoPage]
})
export class CampeaoPageModule {}
