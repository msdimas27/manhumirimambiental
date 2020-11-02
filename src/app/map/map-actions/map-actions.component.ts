import { Component, OnInit } from '@angular/core';
import { EventServerService } from '../../shared/services/event-server.service';
import { DescricoesService } from 'src/app/shared/services/descricoes.service';
import { LocationService } from '../../shared/services/location.service';
import { ILocal } from 'src/app/model/locais.model';
import { Router } from '@angular/router';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-map-actions',
  templateUrl: './map-actions.component.html',
  styleUrls: ['./map-actions.component.scss'],
})
export class MapActionsComponent implements OnInit {

  // false, usando true pra dev
  info_window_active = false;

  constructor(
    private ess: EventServerService,
    private descService: DescricoesService,
    private locService: LocationService,
    private router: Router,
    private socialSharing: SocialSharing) { }

  titulo: string = '';
  subtitulo: string = '';
  distancia: number = 0;
  texto_curto: string = undefined;
  loc: ILocal;
  icon_url = '';
  key = '';

  ngOnInit() {

    this.ess.get<ILocal>('marker_click')
      .subscribe((loc: ILocal) => {
        this.loc = loc;
        this.info_window_active = true;

        let desc = this.descService.getByName(loc.nome);
        if(desc)
        {
          // console.log(desc);
          this.icon_url = '../../../assets/icon/' + desc.key + '.svg';
          this.titulo = desc['titulo'];
          this.texto_curto = desc['texto_curto'] ?
            (desc['texto_curto'][0] as string).slice(0, 250) + '...' : '';
        }
        else
        {
          this.titulo = loc.nome;
          this.texto_curto = '';
          this.icon_url = '../../../assets/icon/lixeiras.svg';
          this.key = '';
        }

        this.distancia = this.locService
          .distance(loc.latitude, loc.longitude);
        this.distancia = Math.floor(this.distancia);
      });
  }

  close() {
    this.info_window_active = false;
  }

  navigate() 
  {
    let route = ['/'];

    switch(this.loc.key) {
      case 'lixeiras':
        route.push('lixeiras-subterraneas');
        break;
      case 'pracas':
        route.push(...['pracas-publicas', this.loc.nome.replace(/\s/g, '_')]);
        break;
      case 'cooperativa':
        route.push(...['coleta-seletiva', 'cooperativa-coleta']);
        break;
      case 'parque':
        route.push('parque-sagui');
        break;
      case 'pilhas':
        route.push(...['coleta-seletiva', 'pontos-entrega']);
        break;
      default:
        route.push('home');
        break;
    }

    this.router.navigate(route)
      .then((value: boolean) => {
        this.close();
      })
  }

  toMaps() {
    let ori = this.locService.getActualLoc();
    let dest = this.loc;

    let url = `https://www.google.com/maps/dir/?api=1&origin=${ori.latitude},${ori.longitude}&destination=${dest.latitude},${dest.longitude}`;

    // this.router.navigateByUrl(url)
    //   .then((value: boolean) => {
    //     console.log('maps redirect', value);
    //   });

    this.socialSharing.canShareVia('com.google.android.apps.maps', '', '', '', url)
      .then((value: any) => {
        console.log('maps redirect', value);
      });

    this.socialSharing.shareVia('com.google.android.apps.maps', '', '', '', url)
      .then((value: any) => {
        console.log('maps redirect', value);
      });
  }

}
