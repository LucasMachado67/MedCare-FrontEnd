import { Component, OnInit } from '@angular/core';
import { Medic } from '../../../models/Medic';
import { MedicService } from '../../../services/medic-service';
import { Router } from '@angular/router';
import { Header } from "../../../components/header/header";
import { FilterPipe } from '../../../utils/filter-pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-medics',
  imports: [Header, FilterPipe, FormsModule],
  templateUrl: './medics.html',
  styleUrl: './medics.scss',
})
export class Medics implements OnInit{

  medic = new Medic;
  medics: Medic[] = [];
  allMedics: any[] = [];
  medicsFiltered: any[] = [];
  searchText: string = '';

  constructor(private medicService:MedicService, private router:Router){}

  filterList() {
    this.medicsFiltered = this.medics.filter(m =>
      m.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  getAll(){
    this.medicService.getAllMedics().subscribe(
      (data) => {
        this.allMedics = data;
        this.medics = this.allMedics;
      },
      (error) => console.error("Error while loading medics", error)
    );
  }

  ngOnInit(): void {
      this.getAll();
      this.medicsFiltered = this.medics;
  }
}
