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

  createMedic(medic: Medic):Observable<Medic>{
    return this.http.post<Medic>(this.url + "/medic/create", medic)
  }
  
}
