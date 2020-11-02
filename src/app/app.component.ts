import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

declare type Page = {
  title: string,
  url?: string,
  icon?: string,
  children?: Page[],
  [key: string]: any
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent {
  public appPages: Page[] = [
    {
      title: 'Coleta Seletiva',
      icon: '../../../assets/icon/cooperativa_outline.svg',
      children: [
        {
          title: 'Cooperativa de coleta',
          // icon: 'market',
          url: '/coleta-seletiva/cooperativa-coleta'
        },
        {
          title: 'Dias e Horários',
          // icon: 'clock',
          url: '/coleta-seletiva/dias-horarios'
        },
        {
          title: 'Pilhas e Baterias',
          // icon: 'marker',
          url: '/coleta-seletiva/pontos-entrega'
        }
      ]
    },
    {
      title: 'Lixeiras Subterrâneas',
      url: '/lixeiras-subterraneas',
      icon: '../../../assets/icon/lixeiras_outline.svg',
    },
    // {
    //   title: 'Lixo Eletrônico',
    //   url: '/lixo-eletronico',
    //   icon: 'heart',
    // },
    {
      title: 'Praças Públicas',
      url: '/pracas-publicas',
      icon: '../../../assets/icon/pracas_outline.svg',
    },
    {
      title: 'Parque Municipal do Sagui',
      url: '/parque-sagui',
      icon: '../../../assets/icon/parque_outline.svg',
    },
    // {
    //   title: 'Dicas',
    //   url: '/dicas/dicas2',
    //   icon: '../../../assets/icon/dicas_outline.svg',
    // },
    {
      title: 'Game',
      url: '/game',
      icon: '../../../assets/icon/game-controller.svg',
    }
  ];

  bottomPages: any[] = [
    // {
    //   title: 'Sobre o App',
    //   url: '/wip'
    // }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
