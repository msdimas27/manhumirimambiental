import { AgmCoreModule } from '@agm/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { IonicModule } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { GMapsComponent } from './g-maps/g-maps.component';
import { MapActionsComponent } from './map-actions/map-actions.component';
import { MapBackdropComponent } from './map-backdrop/map-backdrop.component';
import { MapComponent } from './map.component';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { PageContentModule } from '../shared/page-content/page-content.module';
import { LocaisService } from '../shared/services/locais.service';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@NgModule({
  declarations: [
    MapComponent,
    GMapsComponent,
    MapActionsComponent,
    MapBackdropComponent
  ],
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: environment.maps_api_key
    }),
    IonicModule.forRoot(),
    MatButtonModule,
    PageContentModule
  ],
  exports: [
    MapComponent
  ],
  providers: [
    Geolocation,
    LocaisService,
    SocialSharing
  ]
})

export class MapModule { }
