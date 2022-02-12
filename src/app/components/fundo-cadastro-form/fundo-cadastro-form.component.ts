import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FundoImobiliario } from 'src/app/models/entidades';
import { CadastroService } from 'src/app/services/cadastro.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-fundo-cadastro-form',
  templateUrl: './fundo-cadastro-form.component.html',
  styleUrls: ['./fundo-cadastro-form.component.css']
})
export class FundoCadastroFormComponent implements OnInit {

  fundoImobiliario = new FundoImobiliario();

  constructor(private cadastroService : CadastroService , private segur: LoginService, private rota : Router) { }

  ngOnInit(): void {
  }

  criarFundo()
  {
    this.fundoImobiliario.usuarioId = this.segur.jwtPayload?.usuario.id;

    this.cadastroService.calcularFundo(this.fundoImobiliario).subscribe(
        result => {
          this.rota.navigate(['/fundos'])

        },
    erro => {
     alert("Aconteceu alguma coisa ! Faça login novamente");
     this.rota.navigate([''])
    }

    )
  }

}
