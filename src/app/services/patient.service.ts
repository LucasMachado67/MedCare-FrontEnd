import { Injectable } from '@angular/core';
import { environment } from '../../environments';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Patient } from '../models/Patient';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  
  readonly url = environment.url;
  
  constructor(private http: HttpClient, private router: Router){}

  createPatient(patient: Patient):Observable<Patient>{
    return this.http.post<Patient>(this.url + "/patient/create", patient)
  }
  
}
