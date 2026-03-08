import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/loginService';
import { PersonService } from '../../services/person.service';
import { CommonModule } from '@angular/common';
import { Header } from "../../components/header/header";
import { ProfileButton } from "../../components/profile-button/profile-button";
import { InfoDisplay } from "../../components/info-display/info-display";

type RoleType = 'user' | 'medic' | 'assistant';


@Component({
  selector: 'app-profile.component',
  imports: [CommonModule, Header, ProfileButton, InfoDisplay],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent implements OnInit{

  userData: any | undefined;
  role: string = "";
  formatedDate: string = "";
  selectedItem: string = "";
  viewsProfile = {
    user: ['Endereço', 'Paciente', 'Documentos'],
    medic: ['Endereço', 'Medico'],
    assistant: ['Endereço', 'Assistente']
  };
  items: string [] = [];

  select(item: string) {
    this.selectedItem = item;
  }

  constructor(private loginService:LoginService, private personService:PersonService){}

  logout(){
    this.loginService.logout();
  }
  ngOnInit(): void {
    const session = this.loginService.getUserData();
    this.role = session.role.toUpperCase();

    const roleKey = this.role.toLowerCase() as RoleType;
    this.items = this.viewsProfile[roleKey] || [];

    if(this.items.length > 0){
      this.selectedItem = this.items[0];
    }

    if(session.personId){
      this.personService.findById(Number(session.personId) , this.role)
        .subscribe(data => {
          this.userData = data;
          this.formatedDate = new Date(this.userData.birthDate).toLocaleDateString('pt-BR');
        });
    }
  }
}
