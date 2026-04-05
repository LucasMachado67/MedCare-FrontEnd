import { Injectable } from '@angular/core';
import { environment } from '../../environments';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Assistant } from '../models/Assistant';
import { Observable } from 'rxjs';
import { LoginService } from './loginService';

@Injectable({
  providedIn: 'root',
})
export class AssistantService {
  
  readonly url = environment.url;
  readonly token = sessionStorage.getItem('auth-token')
  readonly company = sessionStorage.getItem('tenantId')
  constructor(private http: HttpClient, private router: Router, private loginService:LoginService){}
  
  createAssistant(assistant: Assistant):Observable<Assistant>{
    const tenantData = this.loginService.getTenantIdFromToken();
    const tenantIdString = tenantData?.tenantId;
    const payload = {...assistant, tenantId: tenantIdString};
    return this.http.post<Assistant>(
      this.url + `/${this.company}/assistant/create`,
      payload,
      { headers: { 'Authorization': `Bearer ${this.token}` }}
    )
  }

  getAllAssistants():Observable<Assistant[]>{
      return this.http.get<Assistant[]>(
        this.url + `/${this.company}/assistant/all`,
        {headers: {'Authorization': `Bearer ${this.token}`}}
      )
    }
}
