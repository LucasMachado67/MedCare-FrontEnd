import { Component } from '@angular/core';
import { TreeNode } from '../../interfaces/TreeNode';
import { TreeView } from "../tree-view/tree-view";
import { trigger, transition, style, animate } from '@angular/animations';
@Component({
  selector: 'app-sidebar-component',
  imports: [TreeView],
  templateUrl: './sidebar-component.html',
  styleUrl: './sidebar-component.scss',
  animations: [
    trigger('slideInOut', [
      // Transição de Entrada (Aparecer)
      transition(':enter', [
        style({ 
          width: '0px', 
          opacity: 0, 
          transform: 'translateX(-100%)' // Começa totalmente fora da tela à esquerda
        }),
        animate('300ms ease-out', style({ 
          width: '250px', 
          opacity: 1, 
          transform: 'translateX(0)' // Desliza até a posição original
        }))
      ]),
      
      // Transição de Saída (Sumir)
      transition(':leave', [
        animate('300ms ease-in', style({ 
          width: '0px', 
          opacity: 0, 
          transform: 'translateX(-100%)' // Desliza de volta para a esquerda
        }))
      ])
    ])
  ]
})
export class SidebarComponent {
  
  isOpen = false;

  activateSideBar():void{
    if(this.isOpen == false){
      this.isOpen = true;
    }else{
      this.isOpen = false;
    }
  }

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
