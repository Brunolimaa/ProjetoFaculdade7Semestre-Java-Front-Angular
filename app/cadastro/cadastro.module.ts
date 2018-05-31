import { NgModule } from '@angular/core';
import { CadastroComponent } from './cadastro.component';
import { CadastroService } from './cadastro.service';

@NgModule({
    declarations: [ CadastroComponent ],
    exports: [ CadastroComponent ],
    providers: [ CadastroService ]
})
export class CadastroModule {}