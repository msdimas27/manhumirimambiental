import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageContentComponent } from './page-content.component';
import { IonicModule } from '@ionic/angular';
import { ShareBarComponent } from './share-bar/share-bar.component';
import { LocationCardComponent } from './location-card/location-card.component';



@NgModule({
  declarations: [
    PageContentComponent,
    ShareBarComponent,
    LocationCardComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    PageContentComponent,
    LocationCardComponent
  ]
})
export class PageContentModule { }
