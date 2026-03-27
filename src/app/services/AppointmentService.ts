import { Injectable } from '@angular/core';
import { environment } from '../../environments';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Appointment } from '../models/Appointment';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  
  readonly url = environment.url;

  constructor(private httpClient: HttpClient, private router: Router){}

  findAppointmentByMedicId(id:number):Observable<Appointment[]>{

    const token = sessionStorage.getItem('auth-token');
    return this.httpClient.get<Appointment[]>(`${this.url}/appointment/medic/${id}`, { headers: { 'Authorization': `Bearer ${token}` }})
  }


}
