"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var aluno_component_1 = require('../aluno/aluno.component');
var router_1 = require('@angular/router');
var cadastro_service_1 = require('./cadastro.service');
var CadastroComponent = (function () {
    function CadastroComponent(service, route, router) {
        var _this = this;
        this.alunos = [];
        this.cadAluno = new aluno_component_1.AlunoComponent();
        this.professores = [];
        this.mensagem = '';
        this.service = service;
        this.route = route;
        this.router = router;
        this.carregar();
        this.route.params.subscribe(function (params) {
            var id = params['id'];
            _this.idAluno = id;
            if (id) {
                _this.service.listaId(id)
                    .subscribe(function (resp) {
                    console.log(resp);
                    _this.cadAluno = resp.json();
                });
            }
        });
        service.listaProfessores()
            .subscribe(function (res) {
            console.log(res.json());
            _this.professores = res.json();
        });
    }
    CadastroComponent.prototype.cadastrar = function (event) {
        var _this = this;
        event.preventDefault();
        console.log(JSON.stringify(this.cadAluno));
        var header = new Headers();
        header.append('Content-Type', 'application/json');
        if (this.idAluno) {
            this.service.alterar(this.idAluno, this.cadAluno)
                .subscribe(function () {
                _this.carregar();
                console.log(_this.cadAluno);
                _this.mensagem = 'Alterado com sucesso!';
                _this.router.navigate(['']);
            });
        }
        else {
            this.service.cadastra(this.cadAluno)
                .subscribe(function () {
                _this.carregar();
                _this.mensagem = 'Cadastrado com sucesso!';
                _this.cadAluno = new aluno_component_1.AlunoComponent;
            });
        }
    };
    CadastroComponent.prototype.carregar = function () {
        var _this = this;
        this.service.lista().subscribe(function (res) {
            _this.alunos = res.json();
            console.log(_this.alunos);
        });
    };
    CadastroComponent.prototype.remove = function (alunos) {
        var _this = this;
        console.log("Chamou aqui" + alunos.nome);
        this.service.remove(alunos.id)
            .subscribe(function () {
            var novosAlunos = _this.alunos.slice(0);
            var indice = novosAlunos.indexOf(alunos);
            novosAlunos.splice(indice, 1);
            _this.alunos = novosAlunos;
            _this.mensagem = "Aluno " + alunos.nome + " removido com sucesso!";
        }, function (erro) { return console.log(erro); });
        console.log(alunos.id);
    };
    CadastroComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'cadastro',
            templateUrl: './cadastro.component.html'
        }), 
        __metadata('design:paramtypes', [cadastro_service_1.CadastroService, router_1.ActivatedRoute, router_1.Router])
    ], CadastroComponent);
    return CadastroComponent;
}());
exports.CadastroComponent = CadastroComponent;
//# sourceMappingURL=cadastro.component.js.map