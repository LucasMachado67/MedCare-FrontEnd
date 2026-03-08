import { Component, OnInit } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header implements OnInit{

  title: string = "Med Care";
  home: string = "";
  tenantId = sessionStorage.getItem('tenanId')
  ngOnInit(): void {
    const role = sessionStorage.getItem('role')
    if(role === "MEDIC"){
      this.home = "/${tenantId}/medic/home"
    }else if(role === "ADMIN"){
      this.home = "/${tenantId}/admin/home"
    }else{
      this.home = "/${tenantId}/home"
    }
  }


}
