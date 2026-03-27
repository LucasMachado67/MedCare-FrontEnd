import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from "../../components/sidebar-component/sidebar-component";
import { Router, RouterModule } from "@angular/router";
import { TreeNode } from '../../interfaces/TreeNode';
import { LoginService } from '../../services/loginService';

@Component({
  selector: 'app-main-layout',
  imports: [SidebarComponent, RouterModule],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
})
export class MainLayout implements OnInit{


  company: string | null = sessionStorage.getItem('companyName');
  nodes: TreeNode[] = [];
  constructor(private router:Router, private loginService:LoginService){}
  
  buildTree():void{
    const user = this.loginService.getUserData();
    const role = user.role;
    if(role == "ADMIN"){
      this.nodes = [
          {
            name:'Home',
            isOpen: false,
            link: `/${this.company}/admin/home`
          },
          {
            name: 'Profile',
            isOpen: false,
            link: ''
          },
          {
            name: 'Pacient',
            isOpen: false,
            children: [
              { name: 'pacients', children: [] , link:`/${this.company}/patients`},
            ]
          },
          { 
            name: 'Schedules',
            isOpen: false,
            children: [
              { name: 'All Schedules', children: [] , link:`/${this.company}/schedule/all`},
              { name: 'New Schedule', children: [] , link:`/${this.company}/schedule/register`},
            ]
          },
          { 
            name: 'Medic',
            isOpen: false,
            children: [
              { name: 'All Medics', children: [] , link:`/${this.company}/medics`},
              { name: 'New Medic', children: [] , link:`/${this.company}/medic/register`},
            ]
          },
          { 
            name: 'Appointments',
            isOpen: false,
            children: [
              { name: 'All Appoinments', children: [], link:`/${this.company}/appointment/all` },
              { name: 'New Appoinment', children: [], link:`/${this.company}/appointment/register` },
            ]
          },
          { 
            name: 'Assistants',
            isOpen: false,
            children: [
              { name: 'All Assistents', children: [], link:`/${this.company}/assistants` },
              { name: 'New Assistents', children: [], link:`/${this.company}/assistant/register` },
            ]
          }
      ];

    }else if(role == "MEDIC"){
      this.nodes = [
        {
          name:'Home',
          isOpen: false,
          link: `/${this.company}/admin/home`
        },
        {
          name: 'Profile',
          isOpen: false,
          link: ''
        },
        {
          name: 'Pacient',
          isOpen: false,
          children: [
            { name: 'pacients', children: [] },
          ]
        },
        { 
          name: 'Schedules',
          isOpen: false,
          children: [
            { name: 'All Schedules', children: [] , link:'/schedule/all'},
            { name: 'New Schedule', children: [] },
          ]
        },
        { 
          name: 'Appointments',
          isOpen: false,
          children: [
            { name: 'All Appoinments', children: [], link:'/appointment/all' },
          ]
        }
      ];
    }else if(role == "ASSISTANT"){

    }else{
      this.router.navigate(['/login'])
    }
  }

  ngOnInit(): void {
    this.buildTree();
  }
}
