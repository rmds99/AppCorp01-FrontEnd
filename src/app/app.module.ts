import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DuvidasFormComponent } from './components/duvidas-form/duvidas-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { CadastroFormComponent } from './components/cadastro-form/cadastro-form.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AccordionModule} from 'primeng/accordion';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';
import {MenubarModule} from 'primeng/menubar';
import { HomeComponent } from './components/home/home.component';
import { FundoCadastroFormComponent } from './components/fundo-cadastro-form/fundo-cadastro-form.component';
import { CalculoDescontoFormComponent } from './components/calculo-desconto-form/calculo-desconto-form.component';
import { MeuDescontoComponent } from './components/meu-desconto/meu-desconto.component';
import {CardModule} from 'primeng/card';

import { CalendarModule } from 'primeng/calendar';
import { ListarFundoComponent } from './components/listar-fundo/listar-fundo.component';

import { TableModule } from 'primeng/table';
import { AcaoCadastroFormComponent } from './components/acao-cadastro-form/acao-cadastro-form.component';
import { ListarAcaoComponent } from './components/listar-acao/listar-acao.component';

export function tokenGetter(): string
{
  return localStorage.getItem('token')!;
}

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    DuvidasFormComponent,
    CadastroFormComponent,
    HomeComponent,
    FundoCadastroFormComponent,
    CalculoDescontoFormComponent,
    MeuDescontoComponent,
    ListarFundoComponent,
    AcaoCadastroFormComponent,
    ListarAcaoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    DropdownModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AccordionModule,
    MenubarModule,
    CardModule,
    CalendarModule,
    TableModule,

    JwtModule.forRoot({

      config:
      {
        tokenGetter,
        allowedDomains: ['localhost:8080'],
        disallowedRoutes: ['http://localhost:8080/oauth/token']
      }
    })

  ],
  providers: [JwtHelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
