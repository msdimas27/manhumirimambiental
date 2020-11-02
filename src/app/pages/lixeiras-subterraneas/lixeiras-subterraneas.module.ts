import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LixeirasSubterraneasPageRoutingModule } from './lixeiras-subterraneas-routing.module';

import { LixeirasSubterraneasPage } from './lixeiras-subterraneas.page';
import { PageContentModule } from '../../shared/page-content/page-content.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LixeirasSubterraneasPageRoutingModule,
    PageContentModule
  ],
  declarations: [LixeirasSubterraneasPage]
})
export class LixeirasSubterraneasPageModule {}
