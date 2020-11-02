"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.NovoJogoPage = void 0;
var core_1 = require("@angular/core");
var NovoJogoPage = /** @class */ (function () {
    function NovoJogoPage(storage) {
        this.storage = storage;
        this.subs = {};
        this.num_jogadores = 1;
        this.base_avatar = 'assets/game/avatares/blank.svg';
        this.jogadores = [{ url: this.base_avatar, name: 'Jogador 1' }, { url: this.base_avatar, name: 'Jogador 2' }];
    }
    NovoJogoPage.prototype.ngOnInit = function () {
        var _this = this;
        this.num_jogadores = this.storage.get('num_jogadores') || this.num_jogadores;
        this.jogadores[0] = this.storage.get('jogador_0') || this.jogadores[0];
        this.jogadores[1] = this.storage.get('jogador_1') || this.jogadores[1];
        this.subs['num_jogadores'] = this.storage
            .watch('num_jogadores')
            .subscribe(function (num_jogadores) {
            _this.num_jogadores = num_jogadores;
        });
        this.subs['jogador_0'] = this.storage
            .watch('jogador_0')
            .subscribe(function (jogador) {
            _this.jogadores[0] = jogador;
        });
        this.subs['jogador_1'] = this.storage
            .watch('jogador_1')
            .subscribe(function (jogador) {
            _this.jogadores[1] = jogador;
        });
    };
    NovoJogoPage.prototype.ngOnDestroy = function () {
        var _this = this;
        console.log('destrui novo_jogo');
        Object.keys(this.subs).forEach(function (key) {
            _this.subs[key].unsubscribe();
        });
    };
    NovoJogoPage = __decorate([
        core_1.Component({
            selector: 'app-novo-jogo',
            templateUrl: './novo-jogo.page.html',
            styleUrls: ['./novo-jogo.page.scss']
        })
    ], NovoJogoPage);
    return NovoJogoPage;
}());
exports.NovoJogoPage = NovoJogoPage;
