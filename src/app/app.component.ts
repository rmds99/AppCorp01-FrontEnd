import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  items: MenuItem[] = [];
  usuarioLogado!: string ;
  idUsuarioLogado!: number ;

  constructor(private rota: Router, private auth: LoginService)
  {


  }

  exibindoMenu()
  {
    return this.rota.url !== '/' && this.rota.url !== '/perguntas' && this.rota.url !== '/cadastrar' ;
  }

  sair()
  {
    this.auth.logout();
    this.rota.navigate(['/']);
    this.usuarioLogado = " "
  }


  ngOnInit(): void
  {

    this.usuarioLogado = this.auth.jwtPayload?.usuario.id ;
    this.idUsuarioLogado = this.auth.jwtPayload?.usuario.id ;

    this.items =
    [
      {
        label: 'Página Inicial', routerLink: "/home",
      },
      {
        label: 'Cálculo',
        items:
        [
          {label: 'Realizar cálculo', routerLink: "/calculo-desconto" ,},
          {label: 'Últ. cálculo realizado', routerLink: "/meu-desconto"}
        ]
      },
      {
        label: 'Fundo Imobiliário',
        items:
        [
          {label: 'Cadastrar fundo',  routerLink: "/cadastrar-fundo"},
          {label: 'Meus fundos', routerLink: "/fundos"}
        ]
      },
      {
        label: 'Acções',
        items:
        [
          {label: 'Cadastrar Acção',  routerLink: "/cadastrar-acao"},
          {label: 'Minhas Acções', routerLink: "/acoes"}
        ]
      },
      {
        label: `Sair`, command: () => this.sair()
      }
    ];

  }
}
