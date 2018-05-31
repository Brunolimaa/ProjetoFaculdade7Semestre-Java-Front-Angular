import { RouterModule, Routes} from '@angular/router';
import { CadastroComponent } from '../app/cadastro/cadastro.component';
import { ProfessorComponent } from './professor/professor.component';

const appRoutes: Routes = [
    {path: 'cadastro', component: CadastroComponent},
    {path: 'cadastro/:id', component: CadastroComponent},
    {path: 'professor', component: ProfessorComponent},
    {path: 'professor/:id', component: ProfessorComponent},
    {path: '**', component: CadastroComponent}

]

export const routing = RouterModule.forRoot(appRoutes);