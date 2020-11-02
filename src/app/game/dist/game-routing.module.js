"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.GamePageRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var game_page_1 = require("./game.page");
var routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'apresentacao',
        component: game_page_1.GamePage
    },
    {
        path: 'apresentacao',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./telas/apresentacao/apresentacao.module'); }).then(function (m) { return m.ApresentacaoPageModule; }); }
    },
    {
        path: 'novo-jogo',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./telas/novo-jogo/novo-jogo.module'); }).then(function (m) { return m.NovoJogoPageModule; }); }
    },
    {
        path: 'jogador',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./telas/jogador/jogador.module'); }).then(function (m) { return m.JogadorPageModule; }); }
    },
    {
        path: 'perguntas/:id',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./telas/perguntas/perguntas.module'); }).then(function (m) { return m.PerguntasPageModule; }); }
    },
    {
        path: 'campeao',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./telas/campeao/campeao.module'); }).then(function (m) { return m.CampeaoPageModule; }); }
    },
    {
        path: 'avatares/:id',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./telas/avatares/avatares.module'); }).then(function (m) { return m.AvataresPageModule; }); }
    }
];
var GamePageRoutingModule = /** @class */ (function () {
    function GamePageRoutingModule() {
    }
    GamePageRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], GamePageRoutingModule);
    return GamePageRoutingModule;
}());
exports.GamePageRoutingModule = GamePageRoutingModule;
