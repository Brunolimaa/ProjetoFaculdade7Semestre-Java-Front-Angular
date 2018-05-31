import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'aluno',
    templateUrl: './aluno.component.html'
})
export class AlunoComponent {

    nome: string;
    curso: string;
    id: string;
    professor: string;

}