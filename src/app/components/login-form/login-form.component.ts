import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(public auth: LoginService,  private router: Router) { }

  ngOnInit(): void {
  }

  login(usuario: string, senha: string)
  {
    this.auth.login(usuario,senha).then(() => {
      this.router.navigate(['/home']);
    })
    .catch(erro => {
      alert("Erro ao fazer login: Tente novamente");
    });
  }

}
