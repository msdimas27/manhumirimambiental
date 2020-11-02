"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CampeaoPage = void 0;
var core_1 = require("@angular/core");
var CampeaoPage = /** @class */ (function () {
    function CampeaoPage(storage, route, router) {
        this.storage = storage;
        this.route = route;
        this.router = router;
        this.subs = {};
        this.num_jogadores = 1;
        this.solo = true;
        this.base_avatar = 'assets/game/avatares/blank.svg';
        this.jogadores = [{ url: this.base_avatar, name: 'Jogador 1' }, { url: this.base_avatar, name: 'Jogador 2' }];
        this.pontuacao = [0, 0];
        this.jogador_campeao = 0;
        this.empate = false;
    }
    CampeaoPage.prototype.ngOnInit = function () {
        this.num_jogadores = this.storage.get('num_jogadores') || this.num_jogadores;
        this.solo = this.num_jogadores == 1;
        this.jogadores[0] = this.storage.get('jogador_0') || this.jogadores[0];
        this.jogadores[1] = this.storage.get('jogador_1') || this.jogadores[1];
        this.pontuacao = this.storage.get('pontuacao') || this.pontuacao;
        this.storage.set('pontuacao', [0, 0]);
        this.setPontuacao();
        // this.subs['num_jogadores'] = this.storage
        //   .watch<any>('num_jogadores')
        //   .subscribe(num_jogadores => {
        //     this.num_jogadores = num_jogadores;
        //     this.solo = this.num_jogadores == 1;
        //   });
        // this.subs['jogador_0'] = this.storage
        //   .watch<any>('jogador_0')
        //   .subscribe(jogador => {
        //     this.jogadores[0] = jogador;
        //   });
        // this.subs['jogador_1'] = this.storage
        //   .watch<any>('jogador_1')
        //   .subscribe(jogador => {
        //     this.jogadores[1] = jogador;
        //   });
        // this.subs['pontuacao'] = this.storage
        //   .watch<any[]>('pontuacao')
        //   .subscribe(pontuacao => {
        //     this.pontuacao = pontuacao;
        //     this.storage.set('pontuacao', [0, 0]);
        //     this.setPontuacao();
        //   });
    };
    CampeaoPage.prototype.setPontuacao = function () {
        if (this.solo) {
            this.empate = false;
            this.jogador_campeao = 0;
        }
        else {
            this.empate = this.pontuacao[0] === this.pontuacao[1];
            this.jogador_campeao = this.pontuacao[0] >= this.pontuacao[1] ? 0 : 1;
        }
    };
    CampeaoPage.prototype.ngOnDestroy = function () {
        var _this = this;
        console.log('destrui campeao');
        this.storage.set('pontuacao', [0, 0]);
        Object.keys(this.subs).forEach(function (key) {
            _this.subs[key].unsubscribe();
        });
    };
    CampeaoPage = __decorate([
        core_1.Component({
            selector: 'app-campeao',
            templateUrl: './campeao.page.html',
            styleUrls: ['./campeao.page.scss']
        })
    ], CampeaoPage);
    return CampeaoPage;
}());
exports.CampeaoPage = CampeaoPage;
