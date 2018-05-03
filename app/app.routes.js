"use strict";
var router_1 = require('@angular/router');
var cadastro_component_1 = require('../app/cadastro/cadastro.component');
var appRoutes = [
    { path: 'cadastro', component: cadastro_component_1.CadastroComponent },
    { path: 'cadastro/:id', component: cadastro_component_1.CadastroComponent },
    { path: '**', component: cadastro_component_1.CadastroComponent }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routes.js.map