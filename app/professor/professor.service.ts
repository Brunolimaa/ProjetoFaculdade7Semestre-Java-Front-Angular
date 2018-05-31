import { Injectable } from "@angular/core";
import { Http, Headers,Response } from "@angular/http";
import { ProfessorComponent } from "./professor.component";
import { Observable } from "rxjs/Observable";

@Injectable()
export class ProfessorService {

    http:Http;
    headers: Headers;
    url: string = "http://localhost:8080/professores";

    constructor(http: Http) {
        this.http = http;
        this.headers = new Headers();
        this.headers.append("Content-Type", "application/json");
    }

    cadastrarProfessor(professor): Observable<Response> {
        console.log(JSON.stringify(professor));
        return this.http.post(this.url, JSON.stringify(professor), {headers: this.headers})
    }

    listaProfessores() {
        return this.http.get(this.url)
    }

    listaId(id) {
        return this.http.get(this.url+"/"+id)
    }

    remove(id) {
        return this.http.delete(this.url+"/"+id);
    }

    altera(id, professor) {
        return this.http.put(this.url+"/"+id, JSON.stringify(professor), {headers: this.headers})
    }
}