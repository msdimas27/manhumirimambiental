import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PracasPublicasPageRoutingModule } from './pracas-publicas-routing.module';

import { PracasPublicasPage } from './pracas-publicas.page';
import { PageContentModule } from '../../shared/page-content/page-content.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PracasPublicasPageRoutingModule,
    PageContentModule
  ],
  declarations: [PracasPublicasPage]
})
export class PracasPublicasPageModule {}
