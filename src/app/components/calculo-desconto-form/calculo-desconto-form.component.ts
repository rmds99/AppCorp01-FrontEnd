import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CalculoDesconto } from 'src/app/models/entidades';
import { CadastroService } from 'src/app/services/cadastro.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-calculo-desconto-form',
  templateUrl: './calculo-desconto-form.component.html',
  styleUrls: ['./calculo-desconto-form.component.css']
})
export class CalculoDescontoFormComponent implements OnInit {

  novoCalculo = new CalculoDesconto();

  constructor(private cadastroService: CadastroService, private segur: LoginService, private rota: Router) { }

  ngOnInit(): void {
  }

  calcular()
  {
    this.novoCalculo.usuarioId = this.segur.jwtPayload?.usuario.id;

    this.cadastroService.calcularDesconto(this.novoCalculo).subscribe(
    result =>
    {
      this.rota.navigate(['meu-desconto']);
    },
    erro =>
    {
      alert("Aconteceu alguma coisa ! Faça login novamente");
      this.rota.navigate([''])
    })
  }

}
