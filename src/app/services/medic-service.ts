import { Injectable } from '@angular/core';
import { environment } from '../../environments';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { Medic } from '../models/Medic';
import { filter, Observable } from 'rxjs';
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

  getAllMedics(search?: string,filterType: string = 'name', orderBy: string = 'name', direction: string = 'ASC'):Observable<Medic[]>{

    let params = new HttpParams()
      .set('orderBy', orderBy)
      .set('direction', direction);
    if (search) {
      params = params.set('search', search);
      params = params.set('filterBy', filterType);
    }
    return this.http.get<Medic[]>(
      this.url + `/${this.company}/medic/all`,
      {
        headers: {'Authorization': `Bearer ${this.token}`},
        params: params
      }
    )
  }
  
}
