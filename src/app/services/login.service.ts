import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl = environment.baseURL;
  jwtPayload: any;
  constructor(private http: HttpClient,private jwtHelper: JwtHelperService)
  {
     this.carregarToken();
  }

  logout()
  {
    localStorage.removeItem('token');
    this.jwtPayload = null;
  }

  login(usuario: string , senha: string)
  {
    var header = new HttpHeaders();
    header = header.append('Content-Type', 'application/x-www-form-urlencoded');
    header = header.append('Authorization', 'Basic YW5ndWxhcjoxMjM=');

    var body = new HttpParams();
    body = body.append('username', usuario);
    body = body.append('password', senha);
    body = body.append('grant_type', 'password');


    return this.http.post(this.baseUrl+"/oauth/token", body, {headers: header} ).toPromise().then((response:any) =>
    {
      console.log(response);
      this.armazenarToken(response['access_token']);
    })
    .catch(response =>
    {
      if (response.status === 400)
      {
        if (response.error === 'invalid_grant')
        {
          return Promise.reject('Usuário ou senha inválida!');
        }
      }

      return Promise.reject(response);
    });

  }



  public armazenarToken(token: string)
  {
    this.jwtPayload = this.jwtHelper.decodeToken(token);

    console.log(this.jwtPayload);

    localStorage.setItem('token', token);
  }

  public carregarToken()
  {
    const token = localStorage.getItem('token');

    if (token)
    {
      this.armazenarToken(token);
    }
  }
}
