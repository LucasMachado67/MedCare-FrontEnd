import { Injectable } from '@angular/core';
import { environment } from '../../environments';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginResponse } from '../interfaces/LoginResponse';
import { Observable, tap } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  readonly url = environment.url;

  constructor(private httpClient: HttpClient, private router: Router){}

  login(email: String, password: String){
    return this.httpClient
        .post<LoginResponse>(this.url + '/auth/login', {email, password})
        .pipe(tap((value) => {
            if(value.token) sessionStorage.setItem('auth-token', value.token);
            if(value.email) sessionStorage.setItem('email', value.email)
          })
        );
  }
  /* 
    Caso o usuário não possuir login,
    ele deverá criar o próprio objeto Person e
    depois dar continuidade com o registro de Usuário no sistema
  */

  signup(){
    
  }
}
