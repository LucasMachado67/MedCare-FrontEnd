import { Component } from '@angular/core';
import { TreeNode } from '../../interfaces/TreeNode';

@Component({
  selector: 'app-home-admin',
  imports: [],
  templateUrl: './home-admin.html',
  styleUrl: './home-admin.scss',
})
export class HomeAdmin {

    company: string | null = sessionStorage.getItem('companyName');
    nodes: TreeNode[] = [
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
}
