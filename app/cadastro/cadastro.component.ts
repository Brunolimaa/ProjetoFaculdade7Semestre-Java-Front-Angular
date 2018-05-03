import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { AlunoComponent } from '../aluno/aluno.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'cadastro',
    templateUrl: './cadastro.component.html'
})
export class CadastroComponent {

    alunos: Object[] = [];
    cadAluno: AlunoComponent = new AlunoComponent();
    http: Http;
    route: ActivatedRoute;
    mensagem: string = '';
    idAluno: string ;
    router: Router;

    constructor(http: Http, route: ActivatedRoute, router: Router) {
        this.route = route;
        this.router = router;
        this.http = http;
        this.carregar();

        this.route.params.subscribe(params => {
            let id = params['id'];
            this.idAluno = id;
           // console.log(id);
            if(id){
                this.http.get('http://localhost:8080/alunos/'+id)
                .subscribe(resp => {
                   console.log(resp);
                   this.cadAluno = resp.json();
                });
            }
        });
    }

    // alterar(){
    //     let header = new Headers();
    //     header.append('Content-Type', 'application/json')
    //     this.http.put('http://localhost:8080/alunos/'+1, JSON.stringify(this.cadAluno), {headers: header})
    // }

    cadastrar(event){
        event.preventDefault();
        
        
        console.log(JSON.stringify(this.cadAluno));
        let header = new Headers();
        header.append('Content-Type', 'application/json')

        if(this.idAluno){
            console.log(this.idAluno);
            this.http.put('http://localhost:8080/alunos/'+this.idAluno, JSON.stringify(this.cadAluno), {headers: header})
            .subscribe( () => {
                this.carregar();
                this.mensagem = 'Alterado com sucesso!';
                this.router.navigate(['']);
            })
        } else {
            this.http.post('http://localhost:8080/alunos', JSON.stringify(this.cadAluno), { headers : header} )
            .subscribe( () => {
               // this.cadAluno = null;
                this.carregar();
                this.mensagem = 'Cadastrado com sucesso!';

            }, error => console.log(error))
            //console.log(this.alunos);
        }


    }

    carregar() {
        this.http.get('http://localhost:8080/alunos')
        .subscribe(res => {
            this.alunos = res.json();
            console.log(this.alunos);
        })
    }

    remove(alunos: AlunoComponent) {
        console.log("Chamou aqui" + alunos.nome);

        this.http.delete('http://localhost:8080/alunos/'+alunos.id)
        .subscribe(
            ()=> {
                let novosAlunos = this.alunos.slice(0);
                let indice = novosAlunos.indexOf(alunos);
                novosAlunos.splice(indice, 1);
                this.alunos = novosAlunos;
                
                this.mensagem = "Aluno "+ alunos.nome +" removido com sucesso!";
               // this.carregar();
            } ,
            erro => console.log(erro)
        );

        console.log(alunos.id);
    }

   /* cadastrar(event) {
        event.preventDefault();

        let header = new Headers();
        header.append('Content-Type', 'application/json')

        this.http.post('v1/fotos', JSON.stringify(this.foto), { headers : header} )
        .subscribe( () => {
            this.foto = new FotoComponent();
            console.log('Cadastrado com sucesso!');

        })
        console.log(this.foto);
    }*/
}