import { Component, OnInit } from '@angular/core';
import { Medic } from '../../../models/Medic';
import { MedicService } from '../../../services/medic-service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserList } from "../../../components/user-list/user-list";

@Component({
  selector: 'app-medics',
  imports: [CommonModule, UserList],
  templateUrl: './medics.html',
  styleUrl: './medics.scss',
})
export class Medics implements OnInit{

  medic = new Medic;
  medics: Medic[] = [];
  allMedics: any[] = [];

  constructor(private medicService:MedicService, private router:Router){}


  getAll(){
    this.medicService.getAllMedics().subscribe(
      (data) => {
        this.allMedics = data;
        this.medics = this.allMedics;
        console.log(this.medics)
      },
      (error) => console.error("Error while loading medics", error)
    );
  }

  ngOnInit(): void {
      this.getAll();
  }
}
