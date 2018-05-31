import { Component } from '@angular/core';
import { AlunoComponent } from '../aluno/aluno.component';
import { ActivatedRoute, Router } from '@angular/router';
import { CadastroService } from './cadastro.service';
import { ProfessorComponent } from '../professor/professor.component';

@Component({
    moduleId: module.id,
    selector: 'cadastro',
    templateUrl: './cadastro.component.html'
})
export class CadastroComponent {

    alunos: Object[] = [];
    cadAluno: AlunoComponent = new AlunoComponent();
    professores: Object[] = [];
    route: ActivatedRoute;
    mensagem: string = '';
    idAluno: string ;
    router: Router;
    service: CadastroService;

    constructor(service: CadastroService, route: ActivatedRoute, router: Router) {
        this.service = service;
        this.route = route;
        this.router = router;
        this.carregar();

        this.route.params.subscribe(params => {
            let id = params['id'];
            this.idAluno = id;
            if(id){
                this.service.listaId(id)
                .subscribe(resp => {
                   console.log(resp);
                   this.cadAluno = resp.json();
                });
            }
        });

        service.listaProfessores()
        .subscribe(res => {
            console.log(res.json());
            this.professores = res.json();
        })
    }

    cadastrar(event){
        event.preventDefault();
        
        console.log(JSON.stringify(this.cadAluno));
        let header = new Headers();
        header.append('Content-Type', 'application/json')

        if(this.idAluno){
            this.service.alterar(this.idAluno, this.cadAluno)
            .subscribe(() => {
                this.carregar();
                console.log(this.cadAluno);
                this.mensagem = 'Alterado com sucesso!';
                this.router.navigate(['']);
            })
        } else {
            this.service.cadastra(this.cadAluno)
            .subscribe(() => {
                this.carregar();
                this.mensagem = 'Cadastrado com sucesso!';
                this.cadAluno = new AlunoComponent; 
            })
        }
    }

    carregar() {
        this.service.lista().subscribe(res => {
                      this.alunos = res.json();
            console.log(this.alunos);  
        })
    }

    remove(alunos: AlunoComponent) {
        console.log("Chamou aqui" + alunos.nome);

        this.service.remove(alunos.id)
        .subscribe(
            ()=> {
                let novosAlunos = this.alunos.slice(0);
                let indice = novosAlunos.indexOf(alunos);
                novosAlunos.splice(indice, 1);
                this.alunos = novosAlunos;
                
                this.mensagem = "Aluno "+ alunos.nome +" removido com sucesso!";
            } ,
            erro => console.log(erro)
        );

        console.log(alunos.id);
    }

}