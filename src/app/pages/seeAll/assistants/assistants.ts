import { Component, OnInit } from '@angular/core';
import { UserList } from "../../../components/user-list/user-list";
import { FilterList } from "../../../components/filter-list/filter-list";
import { Assistant } from '../../../models/Assistant';
import { AssistantService } from '../../../services/assistant-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assistants',
  imports: [UserList, FilterList],
  templateUrl: './assistants.html',
  styleUrl: './assistants.scss',
})
export class Assistants implements OnInit{
  assistant = new Assistant;
  assistants: Assistant[] = [];
  allAssistants: any[] = [];

  constructor(private assistantService:AssistantService, private router:Router){}


  getAll(){
    this.assistantService.getAllAssistants().subscribe(
      (data) => {
        this.allAssistants = data;
        this.assistants = this.allAssistants;
        console.log(this.assistants)
      },
      (error) => console.error("Error while loading assistants", error)
    );
  }

  ngOnInit(): void {
      this.getAll();
  }
}
