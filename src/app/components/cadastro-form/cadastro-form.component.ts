import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/entidades';
import { CadastroService } from 'src/app/services/cadastro.service';

@Component({
  selector: 'app-cadastro-form',
  templateUrl: './cadastro-form.component.html',
  styleUrls: ['./cadastro-form.component.css']
})
export class CadastroFormComponent implements OnInit {

  novoUsuario = new Usuario();

  estadoSelecionado!: number;
  estados: any[] = [];
  cidades: any[] = [];
  sexos: any[] = [];


  constructor(private cadastroService : CadastroService, private rota : Router) { }

  ngOnInit(): void
  {
    this.carregarEstados();
    this.carregarSexo();
  }



  criarUsuario()
  {
    this.cadastroService.criarUsuario(this.novoUsuario).subscribe(
        result => {
          this.rota.navigate([''])
        },
    erro => {
     alert("Aconteceu alguma coisa ! Faça login novamente");
     this.rota.navigate([''])
    }

    )
  }

  carregarSexo()
  {
    this.cadastroService.listarSexos().subscribe(
        result => {
        this.sexos = result.map( sexo => ({ label: sexo.nome, value: sexo.id }));
    },
    erro => {
      console.log("Lista de sexos não foi carregada")
    }

    )
  }

  carregarEstados()
  {
    this.cadastroService.listarEstados().subscribe( result => { this.estados = result.map( estado => ({ label: estado.nome, value: estado.id }));})
  }

  carregarCidades()
  {
    this.cadastroService.listarCidades(this.estadoSelecionado).subscribe( result => {
      this.cidades = result.map( cidade => ({ label: cidade.nome, value: cidade.id }));
    },)
  }

}
