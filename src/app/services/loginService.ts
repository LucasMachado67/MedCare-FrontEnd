import { Injectable } from '@angular/core';
import { environment } from '../../environments';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginResponse } from '../interfaces/LoginResponse';
import { map, Observable, switchMap, tap } from 'rxjs';

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
            if(value.email) sessionStorage.setItem('email', value.email);
            if(value.role) sessionStorage.setItem('role', value.role);
            if(value.personId) sessionStorage.setItem('personId', value.personId.toString());
            if(value.tenantId) sessionStorage.setItem('tenantId', value.tenantId.toString());
            if(value.mustChangePassword) sessionStorage.setItem('mustChangePassword', value.mustChangePassword.toString())
          }),
          switchMap((loginResponse) =>
          this.getCompanyURL().pipe(
            tap((companyName) => {
              sessionStorage.setItem('companyName', companyName);
            }),
            map(() => loginResponse)
          )
        )
      );
  }
  /* 
    Caso o usuário não possuir login,
    ele deverá criar o próprio objeto Person e
    depois dar continuidade com o registro de Usuário no sistema
  */
  getToken(): string | null {
    if (typeof sessionStorage !== 'undefined') {
      return sessionStorage.getItem('auth-token');
    }
    return null;
  }

  getUserData(): any {
    if (typeof sessionStorage !== 'undefined') {
      return {
        email: sessionStorage.getItem("email"),
        role: sessionStorage.getItem('role'),
        personId: sessionStorage.getItem('personId'),
      };
    }
    return null;
  }

  updatePassword(newPassword: string) {
    const token = sessionStorage.getItem('auth-token'); 
    return this.httpClient.post(`${this.url}/auth/update-password`, 
      { newPassword }, 
      { headers: { 'Authorization': `Bearer ${token}` } }
    );
  }

  getCompanyURL():Observable<string>{
    const token = sessionStorage.getItem('auth-token');
    const tenantId = sessionStorage.getItem('tenantId');
    return this.httpClient.get<string>(`${this.url}/company/${tenantId}`,
    { headers: { 'Authorization': `Bearer ${token}` }}
    )
  }

  logout() {
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }
}
