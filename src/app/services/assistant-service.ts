import { Injectable } from '@angular/core';
import { environment } from '../../environments';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Assistant } from '../models/Assistant';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AssistantService {
  
  readonly url = environment.url;
  readonly token = sessionStorage.getItem('auth-token')
  readonly company = sessionStorage.getItem('tenantId')
  constructor(private http: HttpClient, private router: Router){}
  
  createAssistant(assistant: Assistant):Observable<Assistant>{
    return this.http.post<Assistant>(
      this.url + `/${this.company}/assistant/create`,
      assistant,
      { headers: { 'Authorization': `Bearer ${this.token}` }}
    )
  }
}
