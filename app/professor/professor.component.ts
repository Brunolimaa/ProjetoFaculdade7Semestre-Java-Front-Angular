import { Component } from '@angular/core';
import { ProfessorService } from './professor.service';
import { AlunoComponent } from '../aluno/aluno.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'professor',
    templateUrl: './professor.component.html'
})
export class ProfessorComponent {

    professor: AlunoComponent = new AlunoComponent();
    professores: Object[] = [];
    service: ProfessorService;
    mensagem: string = '';
    route: ActivatedRoute;
    router: Router;
    idProfessor: string ;


    constructor(service: ProfessorService, route: ActivatedRoute, router: Router){
        this.service = service;
        this.route = route;
        this.router = router;
        this.carrega();

        this.route.params.subscribe(params => {
            let id = params['id'];
            this.idProfessor = id;
            if(id){
                this.service.listaId(id)
                .subscribe(resp => {
                   console.log(resp);
                   this.professor = resp.json();
                });
            }
        });
    }

    cadastrar(event) {
        event.preventDefault();
        
        if(this.idProfessor){
            this.service.altera(this.idProfessor, this.professor)
            .subscribe(()=> {
                this.mensagem = this.professor.nome+" alterado com sucesso!";
                this.professor = new AlunoComponent();
                this.carrega();
            })

        }else{
            this.service.cadastrarProfessor(this.professor)
            .subscribe(()=>{
                this.mensagem = this.professor.nome+" cadastrado com sucesso!";
                this.professor = new AlunoComponent();
                this.carrega();
            })
        }
    }
    
    carrega() {
        this.service.listaProfessores()
        .subscribe(res => {
            this.professores = res.json();
            console.log(this.professores);
        })
    }

    remove(professor) {
        console.log(professor);
        this.service.remove(professor.id)
        .subscribe(() => {
            let novosProfessores = this.professores.slice(0);
            let indice = novosProfessores.indexOf(professor);
            novosProfessores.splice(indice, 1);
            this.professores = novosProfessores;

            this.mensagem = "Aluno "+ professor.nome +" removido com sucesso!";
        })
    }


}