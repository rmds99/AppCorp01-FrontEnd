import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CalculoDesconto, CalculoDescontoFinal } from 'src/app/models/entidades';
import { CadastroService } from 'src/app/services/cadastro.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-meu-desconto',
  templateUrl: './meu-desconto.component.html',
  styleUrls: ['./meu-desconto.component.css']
})
export class MeuDescontoComponent implements OnInit {

  calculo = new CalculoDescontoFinal();

  info: Boolean = false;

  constructor(private cadastroService: CadastroService, private segur: LoginService, private rota: Router) { }

  ngOnInit(): void
  {
    this.calcular();
  }

  calcular()
  {
    this.cadastroService.buscarDesconto(this.segur.jwtPayload?.usuario.id).subscribe(
    result =>
    {
      this.calculo = result

      if(this.calculo!=null)
        this.info = true;
      else
        this.info = false;

    },
    erro =>
    {
      alert("Aconteceu alguma coisa ! Faça login novamente");
      this.rota.navigate([''])
    })
  }

}
