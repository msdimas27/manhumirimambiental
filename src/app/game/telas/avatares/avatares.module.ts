import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AvataresPageRoutingModule } from './avatares-routing.module';

import { AvataresPage } from './avatares.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AvataresPageRoutingModule
  ],
  declarations: [AvataresPage]
})
export class AvataresPageModule {}
