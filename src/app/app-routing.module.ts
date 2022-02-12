import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcaoCadastroFormComponent } from './components/acao-cadastro-form/acao-cadastro-form.component';
import { CadastroFormComponent } from './components/cadastro-form/cadastro-form.component';
import { CalculoDescontoFormComponent } from './components/calculo-desconto-form/calculo-desconto-form.component';
import { DuvidasFormComponent } from './components/duvidas-form/duvidas-form.component';
import { FundoCadastroFormComponent } from './components/fundo-cadastro-form/fundo-cadastro-form.component';
import { HomeComponent } from './components/home/home.component';
import { ListarAcaoComponent } from './components/listar-acao/listar-acao.component';
import { ListarFundoComponent } from './components/listar-fundo/listar-fundo.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { MeuDescontoComponent } from './components/meu-desconto/meu-desconto.component';

const routes: Routes =
[
  {
    path: '',
    component: LoginFormComponent
  },
  {
    path: 'cadastrar',
    component: CadastroFormComponent
  },
  {
    path: 'perguntas',
    component: DuvidasFormComponent
  },
  {
    path: 'cadastrar-fundo',
    component: FundoCadastroFormComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'calculo-desconto',
    component: CalculoDescontoFormComponent
  },
  {
    path: 'meu-desconto',
    component: MeuDescontoComponent
  },
  {
    path: 'fundos',
    component: ListarFundoComponent
  },
  {
    path: 'cadastrar-acao',
    component: AcaoCadastroFormComponent
  },
  {
    path: 'acoes',
    component: ListarAcaoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
