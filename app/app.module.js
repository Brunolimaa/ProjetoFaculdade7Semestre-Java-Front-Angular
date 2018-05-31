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
var app_component_1 = require('./app.component');
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
var cadastro_component_1 = require('./cadastro/cadastro.component');
var app_routes_1 = require('./app.routes');
var forms_1 = require('@angular/forms');
var aluno_component_1 = require('./aluno/aluno.component');
var professor_component_1 = require('./professor/professor.component');
var cadastro_service_1 = require('./cadastro/cadastro.service');
var professor_service_1 = require('./professor/professor.service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, http_1.HttpModule, app_routes_1.routing, forms_1.FormsModule],
            declarations: [app_component_1.AppComponent, cadastro_component_1.CadastroComponent, aluno_component_1.AlunoComponent, professor_component_1.ProfessorComponent],
            bootstrap: [app_component_1.AppComponent],
            providers: [cadastro_service_1.CadastroService, professor_service_1.ProfessorService]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map