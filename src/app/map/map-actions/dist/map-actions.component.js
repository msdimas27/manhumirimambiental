"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MapActionsComponent = void 0;
var core_1 = require("@angular/core");
var MapActionsComponent = /** @class */ (function () {
    function MapActionsComponent(ess, descService, locService, router, socialSharing) {
        this.ess = ess;
        this.descService = descService;
        this.locService = locService;
        this.router = router;
        this.socialSharing = socialSharing;
        // false, usando true pra dev
        this.info_window_active = false;
        this.titulo = '';
        this.subtitulo = '';
        this.distancia = 0;
        this.texto_curto = undefined;
        this.icon_url = '';
        this.key = '';
    }
    MapActionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ess.get('marker_click')
            .subscribe(function (loc) {
            _this.loc = loc;
            _this.info_window_active = true;
            var desc = _this.descService.getByName(loc.nome);
            if (desc) {
                // console.log(desc);
                _this.icon_url = '../../../assets/icon/' + desc.key + '.svg';
                _this.titulo = desc['titulo'];
                _this.texto_curto = desc['texto_curto'] ?
                    desc['texto_curto'][0].slice(0, 250) + '...' : '';
            }
            else {
                _this.titulo = loc.nome;
                _this.texto_curto = '';
                _this.icon_url = '../../../assets/icon/lixeiras.svg';
                _this.key = '';
            }
            _this.distancia = _this.locService
                .distance(loc.latitude, loc.longitude);
            _this.distancia = Math.floor(_this.distancia);
        });
    };
    MapActionsComponent.prototype.close = function () {
        this.info_window_active = false;
    };
    MapActionsComponent.prototype.navigate = function () {
        var _this = this;
        var route = ['/'];
        switch (this.loc.key) {
            case 'lixeiras':
                route.push('lixeiras-subterraneas');
                break;
            case 'pracas':
                route.push.apply(route, ['pracas-publicas', this.loc.nome.replace(/\s/g, '_')]);
                break;
            case 'cooperativa':
                route.push.apply(route, ['coleta-seletiva', 'cooperativa-coleta']);
                break;
            case 'parque':
                route.push('parque-sagui');
                break;
            case 'pilhas':
                route.push.apply(route, ['coleta-seletiva', 'pontos-entrega']);
                break;
            default:
                route.push('home');
                break;
        }
        this.router.navigate(route)
            .then(function (value) {
            _this.close();
        });
    };
    MapActionsComponent.prototype.toMaps = function () {
        var ori = this.locService.getActualLoc();
        var dest = this.loc;
        var url = "https://www.google.com/maps/dir/?api=1&origin=" + ori.latitude + "," + ori.longitude + "&destination=" + dest.latitude + "," + dest.longitude;
        // this.router.navigateByUrl(url)
        //   .then((value: boolean) => {
        //     console.log('maps redirect', value);
        //   });
        this.socialSharing.canShareVia('com.google.android.apps.maps', '', '', '', url)
            .then(function (value) {
            console.log('maps redirect', value);
        });
        this.socialSharing.shareVia('com.google.android.apps.maps', '', '', '', url)
            .then(function (value) {
            console.log('maps redirect', value);
        });
    };
    MapActionsComponent = __decorate([
        core_1.Component({
            selector: 'app-map-actions',
            templateUrl: './map-actions.component.html',
            styleUrls: ['./map-actions.component.scss']
        })
    ], MapActionsComponent);
    return MapActionsComponent;
}());
exports.MapActionsComponent = MapActionsComponent;
