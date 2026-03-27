import { Injectable } from '@angular/core';
import { environment } from '../../environments';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginResponse } from '../interfaces/LoginResponse';
import { BehaviorSubject, map, Observable, switchMap, tap } from 'rxjs';
import { jwtDecode } from 'jwt-decode';

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
            if(value.personId) sessionStorage.setItem('personId', value.personId.toString());
            if(value.tenantId) sessionStorage.setItem('tenantId', value.tenantId.toString());
            if(value.mustChangePassword) sessionStorage.setItem('mustChangePassword', value.mustChangePassword.toString())
          })
        ,
          switchMap((loginResponse) =>
          this.getCompanyURL().pipe(
            tap((response) => {
              const companyName = response.companyName.toLowerCase().replace(/\s+/g, '')
              sessionStorage.setItem('companyName', companyName);
            }),
            map(() => loginResponse)
          )
        )
      );
  }  
  getToken(): string | null {
    if (typeof sessionStorage !== 'undefined') {
      return sessionStorage.getItem('auth-token');
    }
    return null;
  }

  getUserData(): any{
    const token = this.getToken();
    if(!token) return null;

    try{
      const payload: any = jwtDecode(token);
      return {
        email: payload.sub,
        role: payload.role,
        personId: sessionStorage.getItem('personId')
      }
    }catch (error){
      return null
    }
    
  }

  updatePassword(newPassword: string) {
    const token = sessionStorage.getItem('auth-token'); 
    return this.httpClient.post(`${this.url}/auth/update-password`, 
      { newPassword }, 
      { headers: { 'Authorization': `Bearer ${token}` } }
    );
  }

  getCompanyURL():Observable<any>{  
    const token = sessionStorage.getItem('auth-token');
    const tenantId = sessionStorage.getItem('tenantId');
    return this.httpClient.get<any>(`${this.url}/company/${tenantId}`, {
      headers: { 'Authorization': `Bearer ${token}` }
    });
  }

  logout() {
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }
}
