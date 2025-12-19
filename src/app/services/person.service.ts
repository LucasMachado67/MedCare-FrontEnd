import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments';
import { Observable } from 'rxjs';
import { Medic } from '../models/Medic';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  
  readonly url = environment.url;
  
  constructor(private httpClient: HttpClient, private router: Router){}

  findById(id:number, role:String):Observable<Medic>{
    const endpoint = role.toLowerCase();
    return this.httpClient.get<Medic>(`${this.url}/${endpoint}/${id}`)
  }
}
