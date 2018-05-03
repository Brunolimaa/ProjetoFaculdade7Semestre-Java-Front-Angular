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
var http_1 = require('@angular/http');
var aluno_component_1 = require('../aluno/aluno.component');
var router_1 = require('@angular/router');
var CadastroComponent = (function () {
    function CadastroComponent(http, route, router) {
        var _this = this;
        this.alunos = [];
        this.cadAluno = new aluno_component_1.AlunoComponent();
        this.mensagem = '';
        this.route = route;
        this.router = router;
        this.http = http;
        this.carregar();
        this.route.params.subscribe(function (params) {
            var id = params['id'];
            _this.idAluno = id;
            // console.log(id);
            if (id) {
                _this.http.get('http://localhost:8080/alunos/' + id)
                    .subscribe(function (resp) {
                    console.log(resp);
                    _this.cadAluno = resp.json();
                });
            }
        });
    }
    // alterar(){
    //     let header = new Headers();
    //     header.append('Content-Type', 'application/json')
    //     this.http.put('http://localhost:8080/alunos/'+1, JSON.stringify(this.cadAluno), {headers: header})
    // }
    CadastroComponent.prototype.cadastrar = function (event) {
        var _this = this;
        event.preventDefault();
        console.log(JSON.stringify(this.cadAluno));
        var header = new http_1.Headers();
        header.append('Content-Type', 'application/json');
        if (this.idAluno) {
            console.log(this.idAluno);
            this.http.put('http://localhost:8080/alunos/' + this.idAluno, JSON.stringify(this.cadAluno), { headers: header })
                .subscribe(function () {
                _this.carregar();
                _this.mensagem = 'Alterado com sucesso!';
                _this.router.navigate(['']);
            });
        }
        else {
            this.http.post('http://localhost:8080/alunos', JSON.stringify(this.cadAluno), { headers: header })
                .subscribe(function () {
                // this.cadAluno = null;
                _this.carregar();
                _this.mensagem = 'Cadastrado com sucesso!';
            }, function (error) { return console.log(error); });
        }
    };
    CadastroComponent.prototype.carregar = function () {
        var _this = this;
        this.http.get('http://localhost:8080/alunos')
            .subscribe(function (res) {
            _this.alunos = res.json();
            console.log(_this.alunos);
        });
    };
    CadastroComponent.prototype.remove = function (alunos) {
        var _this = this;
        console.log("Chamou aqui" + alunos.nome);
        this.http.delete('http://localhost:8080/alunos/' + alunos.id)
            .subscribe(function () {
            var novosAlunos = _this.alunos.slice(0);
            var indice = novosAlunos.indexOf(alunos);
            novosAlunos.splice(indice, 1);
            _this.alunos = novosAlunos;
            _this.mensagem = "Aluno " + alunos.nome + " removido com sucesso!";
            // this.carregar();
        }, function (erro) { return console.log(erro); });
        console.log(alunos.id);
    };
    CadastroComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'cadastro',
            templateUrl: './cadastro.component.html'
        }), 
        __metadata('design:paramtypes', [http_1.Http, router_1.ActivatedRoute, router_1.Router])
    ], CadastroComponent);
    return CadastroComponent;
}());
exports.CadastroComponent = CadastroComponent;
//# sourceMappingURL=cadastro.component.js.map