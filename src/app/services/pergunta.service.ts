import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pergunta } from '../models/entidades';

@Injectable({
  providedIn: 'root'
})
export class PerguntaService {

  urlServidor = environment.baseURL;

  constructor(private http: HttpClient){}



  listarPerguntas(): Observable<Pergunta[]>
  {
    return this.http.get<Pergunta[]>(this.urlServidor+"/pergunta");
  }
}
