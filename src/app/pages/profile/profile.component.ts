import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/loginService';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonService } from '../../services/person.service';
import { CommonModule } from '@angular/common';
import { Header } from "../../components/header/header";

@Component({
  selector: 'app-profile.component',
  imports: [CommonModule, Header],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent implements OnInit{

  userData: any | undefined;
  role: string = "";

  constructor(private loginService:LoginService, private route: ActivatedRoute, private router:Router, private personService:PersonService){}

  logout(){
    this.loginService.logout();
  }
  ngOnInit(): void {
    const session = this.loginService.getUserData();
    this.role = session.role.toUpperCase();

    if(session.personId){
      this.personService.findById(Number(session.personId) , this.role)
        .subscribe(data => {
          this.userData = data;
        });
        console.log("O resultado do userData é: " + this.userData)
    }
  }
}
