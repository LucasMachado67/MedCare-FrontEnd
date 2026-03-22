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

  findById(id:number, role:String):Observable<any>{
    const token = sessionStorage.getItem('auth-token');
    const tenantId = sessionStorage.getItem('tenantId');
    let endpoint = "";
    if(role == "USER"){
       endpoint = "patient";
    }else{
       endpoint = role.toLowerCase();
    }
    return this.httpClient.get<any>(`${this.url}/${tenantId}/${endpoint}/${id}`, { headers: { 'Authorization': `Bearer ${token}` }})
  }
}
