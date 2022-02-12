import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Acao } from 'src/app/models/entidades';
import { CadastroService } from 'src/app/services/cadastro.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-acao-cadastro-form',
  templateUrl: './acao-cadastro-form.component.html',
  styleUrls: ['./acao-cadastro-form.component.css']
})
export class AcaoCadastroFormComponent implements OnInit {

  acao = new Acao();

  constructor(private cadastroService : CadastroService , private segur: LoginService, private rota : Router) { }

  ngOnInit(): void {
  }

  criarAcao()
  {
    this.acao.usuarioId = this.segur.jwtPayload?.usuario.id;

    this.cadastroService.calcularAcao(this.acao).subscribe(
        result => {
          this.rota.navigate(['/acoes'])

        },
    erro => {
     alert("Aconteceu alguma coisa ! Faça login novamente");
     this.rota.navigate([''])
    }

    )
  }

}
