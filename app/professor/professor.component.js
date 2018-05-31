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
var professor_service_1 = require('./professor.service');
var aluno_component_1 = require('../aluno/aluno.component');
var router_1 = require('@angular/router');
var ProfessorComponent = (function () {
    function ProfessorComponent(service, route, router) {
        var _this = this;
        this.professor = new aluno_component_1.AlunoComponent();
        this.professores = [];
        this.mensagem = '';
        this.service = service;
        this.route = route;
        this.router = router;
        this.carrega();
        this.route.params.subscribe(function (params) {
            var id = params['id'];
            _this.idProfessor = id;
            if (id) {
                _this.service.listaId(id)
                    .subscribe(function (resp) {
                    console.log(resp);
                    _this.professor = resp.json();
                });
            }
        });
    }
    ProfessorComponent.prototype.cadastrar = function (event) {
        var _this = this;
        event.preventDefault();
        if (this.idProfessor) {
            this.service.altera(this.idProfessor, this.professor)
                .subscribe(function () {
                _this.mensagem = _this.professor.nome + " alterado com sucesso!";
                _this.professor = new aluno_component_1.AlunoComponent();
                _this.carrega();
            });
        }
        else {
            this.service.cadastrarProfessor(this.professor)
                .subscribe(function () {
                _this.mensagem = _this.professor.nome + " cadastrado com sucesso!";
                _this.professor = new aluno_component_1.AlunoComponent();
                _this.carrega();
            });
        }
    };
    ProfessorComponent.prototype.carrega = function () {
        var _this = this;
        this.service.listaProfessores()
            .subscribe(function (res) {
            _this.professores = res.json();
            console.log(_this.professores);
        });
    };
    ProfessorComponent.prototype.remove = function (professor) {
        var _this = this;
        console.log(professor);
        this.service.remove(professor.id)
            .subscribe(function () {
            var novosProfessores = _this.professores.slice(0);
            var indice = novosProfessores.indexOf(professor);
            novosProfessores.splice(indice, 1);
            _this.professores = novosProfessores;
            _this.mensagem = "Aluno " + professor.nome + " removido com sucesso!";
        });
    };
    ProfessorComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'professor',
            templateUrl: './professor.component.html'
        }), 
        __metadata('design:paramtypes', [professor_service_1.ProfessorService, router_1.ActivatedRoute, router_1.Router])
    ], ProfessorComponent);
    return ProfessorComponent;
}());
exports.ProfessorComponent = ProfessorComponent;
//# sourceMappingURL=professor.component.js.map