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
  company = sessionStorage.getItem('companyName')
  role = sessionStorage.getItem('role');
  route: (string | null)[] = [];
  ngOnInit(): void {
    if(this.role === "MEDIC"){
      this.home = `/${this.company}/medic/home`
    }else if(this.role === "ADMIN"){
      this.home = `/${this.company}/admin/home`
    }else{
      this.home = `/${this.company}/home`
    }
  }

  navigate():void{
    if(this.role == "ADMIN"){ 
      this.route = [this.company, "admin", "home"];
    }else if(this.role == "MEDIC"){
      this.route = [this.company, "medic", "home"];
    }else if(this.role == "ASSISTANT"){
      this.route = [this.company, "assistant", "home"];
    }else{
      this.route = [this.company, "home"];
    }
  }


}
