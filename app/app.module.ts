import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser'
import { HttpModule } from '@angular/http';
import { CadastroComponent } from './cadastro/cadastro.component';
import { routing } from './app.routes';
import { FormsModule } from '@angular/forms';
import { AlunoComponent } from './aluno/aluno.component';

@NgModule({
    imports: [BrowserModule, HttpModule, routing, FormsModule ],
    declarations: [AppComponent, CadastroComponent, AlunoComponent],
    bootstrap: [AppComponent]
})
export class AppModule {}