import { Injectable } from '@angular/core';
import { environment } from '../../environments';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Medic } from '../models/Medic';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MedicService {

  readonly url = environment.url;
  
  constructor(private http: HttpClient, private router: Router){}

  token = sessionStorage.getItem('auth-token')
  company = sessionStorage.getItem('tenantId')
  createMedic(medic: Medic):Observable<Medic>{
    return this.http.post<Medic>(
      this.url + `/${this.company}/medic/create`,
      medic,
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
