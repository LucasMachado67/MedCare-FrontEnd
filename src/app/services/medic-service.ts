import { Injectable } from '@angular/core';
import { environment } from '../../environments';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Medic } from '../models/Medic';
import { Observable } from 'rxjs';
import { LoginService } from './loginService';

@Injectable({
  providedIn: 'root',
})
export class MedicService {

  readonly url = environment.url;
  token = sessionStorage.getItem('auth-token');
  company = sessionStorage.getItem('tenantId');
  
  constructor(private http: HttpClient, private router: Router, private loginService:LoginService){}

  createMedic(medic: Medic):Observable<Medic>{
    const tenantData = this.loginService.getTenantIdFromToken();
    const tenantIdString = tenantData?.tenantId;
    const payload = {...medic, tenantId: tenantIdString};
    return this.http.post<Medic>(
      this.url + `/${this.company}/medic/create`,
      payload,
      { headers: { 'Authorization': `Bearer ${this.token}` }}
    )
  }

  getAllMedics():Observable<Medic[]>{
    return this.http.get<Medic[]>(
      this.url + `/${this.company}/medic/all`,
      {headers: {'Authorization': `Bearer ${this.token}`}}
    )
  }
  
}
