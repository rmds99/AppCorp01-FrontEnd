import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FundoImobiliario } from 'src/app/models/entidades';
import { CadastroService } from 'src/app/services/cadastro.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-listar-fundo',
  templateUrl: './listar-fundo.component.html',
  styleUrls: ['./listar-fundo.component.css']
})
export class ListarFundoComponent implements OnInit {

  listaFundo: FundoImobiliario[] = [];

  constructor(private cadastroService : CadastroService, private segur: LoginService, private rota: Router) { }

  ngOnInit(): void
  {
    this. buscarFundos();
  }


  buscarFundos()
  {
    this.cadastroService.buscarFundo(this.segur.jwtPayload?.usuario.id).subscribe(
    result =>
    {
      this.listaFundo = result
    },
    erro =>
    {
      alert("Aconteceu alguma coisa ! Faça login novamente");
      this.rota.navigate([''])
    })
  }

}
