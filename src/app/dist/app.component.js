"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppComponent = void 0;
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent(platform, splashScreen, statusBar) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.appPages = [
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
                icon: '../../../assets/icon/lixeiras_outline.svg'
            },
            // {
            //   title: 'Lixo Eletrônico',
            //   url: '/lixo-eletronico',
            //   icon: 'heart',
            // },
            {
                title: 'Praças Públicas',
                url: '/pracas-publicas',
                icon: '../../../assets/icon/pracas_outline.svg'
            },
            {
                title: 'Parque Municipal do Sagui',
                url: '/parque-sagui',
                icon: '../../../assets/icon/parque_outline.svg'
            },
            // {
            //   title: 'Dicas',
            //   url: '/dicas/dicas2',
            //   icon: '../../../assets/icon/dicas_outline.svg',
            // },
            {
                title: 'Game',
                url: '/game',
                icon: '../../../assets/icon/game-controller.svg'
            }
        ];
        this.bottomPages = [
        // {
        //   title: 'Sobre o App',
        //   url: '/wip'
        // }
        ];
        this.initializeApp();
    }
    AppComponent.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: 'app.component.html',
            styleUrls: ['app.component.scss']
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
