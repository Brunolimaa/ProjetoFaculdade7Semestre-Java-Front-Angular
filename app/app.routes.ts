import { RouterModule, Routes} from '@angular/router';
import { CadastroComponent } from '../app/cadastro/cadastro.component';

const appRoutes: Routes = [
    {path: 'cadastro', component: CadastroComponent},
    {path: 'cadastro/:id', component: CadastroComponent},
    {path: '**', component: CadastroComponent}

]

export const routing = RouterModule.forRoot(appRoutes);