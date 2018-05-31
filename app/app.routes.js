"use strict";
var router_1 = require('@angular/router');
var cadastro_component_1 = require('../app/cadastro/cadastro.component');
var professor_component_1 = require('./professor/professor.component');
var appRoutes = [
    { path: 'cadastro', component: cadastro_component_1.CadastroComponent },
    { path: 'cadastro/:id', component: cadastro_component_1.CadastroComponent },
    { path: 'professor', component: professor_component_1.ProfessorComponent },
    { path: 'professor/:id', component: professor_component_1.ProfessorComponent },
    { path: '**', component: cadastro_component_1.CadastroComponent }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routes.js.map