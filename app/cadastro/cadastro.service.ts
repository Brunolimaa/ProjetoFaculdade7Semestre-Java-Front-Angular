import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { AlunoComponent } from "../aluno/aluno.component";
import { Observable } from "rxjs/Observable";

@Injectable()
export class CadastroService {

    http: Http;
    headers: Headers;
    url: string = 'http://localhost:8080/alunos';
    urlProfessor: string = 'http://localhost:8080/professores';
    constructor(http: Http) {

        this.http = http;
        this.headers = new Headers();
        this.headers.append("Content-Type", "application/json");

    }

    cadastra(aluno: AlunoComponent): Observable<Response> {
        console.log(JSON.stringify(aluno));
        return this.http.post(this.url, JSON.stringify(aluno), {headers: this.headers})
    }

    lista() {
        return this.http.get(this.url)
    }

    listaId(id) {
        return this.http.get(this.url+"/"+id)
    }

    listaProfessores() {
        return this.http.get(this.urlProfessor)
    }

    alterar(id, cadAluno: AlunoComponent) {
        return this.http.put(this.url+"/"+id, JSON.stringify(cadAluno), {headers : this.headers} );
    }

    remove(id) {
        return this.http.delete(this.url+"/"+id)
    }
}