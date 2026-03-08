import { Component } from '@angular/core';
import { Header } from "../../components/header/header";
import { TreeNode } from '../../interfaces/TreeNode';
import { TreeView } from "../../components/tree-view/tree-view";
import { Router } from '@angular/router';
import { AllAppointments } from "../../components/all-appointments/all-appointments";

@Component({
  selector: 'app-home-medic',
  imports: [Header, TreeView, AllAppointments],
  templateUrl: './home-medic.html',
  styleUrl: './home-medic.scss',
})
export class HomeMedic {

  nodes: TreeNode[] = [
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
}
