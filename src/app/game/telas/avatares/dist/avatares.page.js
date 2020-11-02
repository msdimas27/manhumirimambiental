"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AvataresPage = void 0;
var core_1 = require("@angular/core");
var AvataresPage = /** @class */ (function () {
    function AvataresPage(route, storage, router) {
        this.route = route;
        this.storage = storage;
        this.router = router;
        this.base_avatar = 'assets/game/avatares/';
        this.avatares = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        this.selected_avatar = 'blank';
        this.name = '';
        this.id_jogador = 0;
    }
    AvataresPage.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.id_jogador = params.id;
            var jogador = _this.storage.get("jogador_" + _this.id_jogador);
            if (jogador) {
                _this.selected_avatar = jogador.avatar;
                _this.name = jogador.name;
            }
        });
    };
    AvataresPage.prototype.avatarSrc = function (avatar) {
        return this.base_avatar + avatar + '.svg';
    };
    AvataresPage.prototype.clickAvatar = function (avatar) {
        this.selected_avatar = avatar;
    };
    AvataresPage.prototype.clickSalvar = function () {
        var url = this.avatarSrc(this.selected_avatar);
        var avatar = this.selected_avatar;
        var name = this.name;
        console.log(this.id_jogador);
        this.storage.set("jogador_" + this.id_jogador, {
            url: url, name: name, avatar: avatar
        });
        this.router.navigate(['/game', 'novo-jogo']);
    };
    AvataresPage = __decorate([
        core_1.Component({
            selector: 'app-avatares',
            templateUrl: './avatares.page.html',
            styleUrls: ['./avatares.page.scss']
        })
    ], AvataresPage);
    return AvataresPage;
}());
exports.AvataresPage = AvataresPage;
