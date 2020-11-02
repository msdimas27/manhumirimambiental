"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PerguntasPage = void 0;
var core_1 = require("@angular/core");
var PerguntasJSON = require("../../../../assets/quiz.json");
var PerguntasPage = /** @class */ (function () {
    function PerguntasPage(storage, route, router) {
        this.storage = storage;
        this.route = route;
        this.router = router;
        this.subs = {};
        this.num_jogadores = 1;
        this.solo = true;
        this.base_avatar = 'assets/game/avatares/blank.svg';
        this.jogadores = [{ url: this.base_avatar, name: 'Jogador 1' }, { url: this.base_avatar, name: 'Jogador 2' }];
        this.pontuacao = [0, 0];
        this.idJogador = 0;
        this.firstActive = true;
        this.idPergunta = 0;
        this.tempoRestante = 30;
        this.selected = false;
        this.perguntas = PerguntasJSON['default'];
    }
    PerguntasPage.prototype.ngOnInit = function () {
        var _this = this;
        this.num_jogadores = this.storage.get('num_jogadores') || this.num_jogadores;
        this.solo = this.num_jogadores == 1;
        this.jogadores[0] = this.storage.get('jogador_0') || this.jogadores[0];
        this.jogadores[1] = this.storage.get('jogador_1') || this.jogadores[1];
        this.pontuacao = this.storage.get('pontuacao') || this.pontuacao;
        // console.log(PerguntasJSON);
        this.subs['num_jogadores'] = this.storage
            .watch('num_jogadores')
            .subscribe(function (num_jogadores) {
            _this.num_jogadores = num_jogadores;
            _this.solo = _this.num_jogadores == 1;
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
        this.subs['pontuacao'] = this.storage
            .watch('pontuacao')
            .subscribe(function (pontuacao) {
            _this.pontuacao = pontuacao;
        });
        this.route.params
            .subscribe(function (params) {
            _this.idPergunta = parseInt(params.id);
            if (_this.num_jogadores == 1) {
                _this.idJogador = 0;
                _this.firstActive = true;
            }
            else {
                _this.idJogador = _this.idPergunta % 2;
                _this.firstActive = _this.idJogador === 0;
            }
            _this.setTempo();
        });
    };
    PerguntasPage.prototype.terminaRodada = function (intervalId) {
        var _this = this;
        if (intervalId === void 0) { intervalId = -1; }
        clearInterval(intervalId);
        setTimeout(function () {
            if (_this.idPergunta + 1 < _this.perguntas.length) {
                _this.router.navigate(['/game', 'perguntas', _this.idPergunta + 1]);
            }
            else {
                _this.router.navigate(['/game', 'campeao']);
            }
        }, 2000);
    };
    PerguntasPage.prototype.selectAlternativa = function (alt) {
        if (this.selected) {
            return;
        }
        this.selected = true;
        this.tempoRestante = 0;
        if (alt.correta) {
            this.pontuacao[this.idJogador] += 1;
            this.storage.set('pontuacao', this.pontuacao);
        }
        this.terminaRodada();
    };
    PerguntasPage.prototype.setTempo = function () {
        var _this = this;
        var intervalId = setInterval(function () {
            _this.tempoRestante += _this.tempoRestante > 0 ? -1 : 0;
            if (!_this.tempoRestante) {
                console.log('chama termina rodada');
                _this.terminaRodada(intervalId);
            }
        }, 1000);
    };
    PerguntasPage.prototype.setPad = function (n) {
        return (n + '').padStart(2, '0');
    };
    PerguntasPage.prototype.ngOnDestroy = function () {
        var _this = this;
        console.log('destrui perguntas');
        Object.keys(this.subs).forEach(function (key) {
            _this.subs[key].unsubscribe();
        });
    };
    PerguntasPage = __decorate([
        core_1.Component({
            selector: 'app-perguntas',
            templateUrl: './perguntas.page.html',
            styleUrls: ['./perguntas.page.scss']
        })
    ], PerguntasPage);
    return PerguntasPage;
}());
exports.PerguntasPage = PerguntasPage;
