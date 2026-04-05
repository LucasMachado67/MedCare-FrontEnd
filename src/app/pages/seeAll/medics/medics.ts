import { Component, OnInit } from '@angular/core';
import { Medic } from '../../../models/Medic';
import { MedicService } from '../../../services/medic-service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserList } from "../../../components/user-list/user-list";
import { FilterList } from "../../../components/filter-list/filter-list";
import { filter } from 'rxjs';

@Component({
  selector: 'app-medics',
  imports: [CommonModule, UserList, FilterList],
  templateUrl: './medics.html',
  styleUrl: './medics.scss',
})
export class Medics implements OnInit{

  medic = new Medic;
  medics: Medic[] = [];
  allMedics: any[] = [];
  search?: string = "";
  filterType: string = "name";

  constructor(private medicService:MedicService, private router:Router){}

  getFilters(event: {term: string, type: string}){
    this.search = event.term;
    this.filterType = event.type;
    this.getAll();
  }

  getAll(){
    this.medicService.getAllMedics(this.search, this.filterType).subscribe(
      (data) => {
        this.allMedics = data;
        this.medics = this.allMedics;
      },
      (error) => console.error("Error while loading medics", error)
    );
  }

  ngOnInit(): void {
      this.getAll();
  }
}
