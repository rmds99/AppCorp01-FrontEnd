import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Acao, CalculoDesconto, CalculoDescontoFinal, Cidade, Estado, FundoImobiliario, Sexo, Usuario } from '../models/entidades';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  urlServidor = environment.baseURL;

  constructor(private http: HttpClient){}



  buscarFundo(idUsuarioLogado: number): Observable<FundoImobiliario[]>
  {
    return this.http.get<FundoImobiliario[]>(this.urlServidor+"/fundo/usuario/"+idUsuarioLogado);
  }

  buscarAcao(idUsuarioLogado: number): Observable<Acao[]>
  {
    return this.http.get<Acao[]>(this.urlServidor+"/acoes/usuario/"+idUsuarioLogado);
  }

  buscarDesconto(idUsuarioLogado: number): Observable<CalculoDescontoFinal>
  {
    return this.http.get<CalculoDescontoFinal>(this.urlServidor+"/calculo/"+idUsuarioLogado);
  }


  calcularAcao(novoCalculo: Acao): Observable<Acao>
  {
    return this.http.post<Acao>(this.urlServidor+"/acoes", novoCalculo);
  }

  calcularFundo(novoCalculo: FundoImobiliario): Observable<FundoImobiliario>
  {
    return this.http.post<FundoImobiliario>(this.urlServidor+"/fundo", novoCalculo);
  }

  calcularDesconto(novoCalculo: CalculoDesconto): Observable<CalculoDesconto>
  {
    return this.http.post<CalculoDesconto>(this.urlServidor+"/calculo", novoCalculo);
  }

  criarUsuario(novoUsuario: Usuario): Observable<Usuario>
  {
    return this.http.post<Usuario>(this.urlServidor+"/usuario",novoUsuario);
  }

  listarSexos(): Observable<Sexo[]>
  {
    return this.http.get<Sexo[]>(this.urlServidor+"/sexo");
  }

  listarEstados(): Observable<Estado[]>
  {
    return this.http.get<Estado[]>(this.urlServidor+"/estado");
  }

  listarCidades(estadoId: number): Observable<Cidade[]>
  {
    return this.http.get<Cidade[]>(this.urlServidor+"/cidade/estado/"+estadoId);
  }

}
