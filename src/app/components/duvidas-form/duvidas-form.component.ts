import { Component, OnInit } from '@angular/core';
import { PerguntaService } from 'src/app/services/pergunta.service';

@Component({
  selector: 'app-duvidas-form',
  templateUrl: './duvidas-form.component.html',
  styleUrls: ['./duvidas-form.component.css']
})
export class DuvidasFormComponent implements OnInit {

  perguntas: any[] = [];

  constructor(private perguntaService : PerguntaService) { }

  ngOnInit(): void
  {

    this.carregarPerguntas();
  }

  carregarPerguntas()
  {
    this.perguntaService.listarPerguntas().subscribe( result => { this.perguntas = result })
  }


}
