import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Acao } from 'src/app/models/entidades';
import { CadastroService } from 'src/app/services/cadastro.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-listar-acao',
  templateUrl: './listar-acao.component.html',
  styleUrls: ['./listar-acao.component.css']
})
export class ListarAcaoComponent implements OnInit {

  listaAcao: Acao[] = [];

  constructor(private cadastroService : CadastroService, private segur: LoginService, private rota: Router) { }

  ngOnInit(): void
  {
    this.buscarAcoes();
  }


  buscarAcoes()
  {
    this.cadastroService.buscarAcao(this.segur.jwtPayload?.usuario.id).subscribe(
    result =>
    {
      this.listaAcao = result
    },
    erro =>
    {
      alert("Aconteceu alguma coisa ! Faça login novamente");
      this.rota.navigate([''])
    })
  }
}
