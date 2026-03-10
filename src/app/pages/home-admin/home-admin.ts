import { Component } from '@angular/core';
import { Header } from "../../components/header/header";
import { TreeNode } from '../../interfaces/TreeNode';
import { TreeView } from "../../components/tree-view/tree-view";
import { Router } from '@angular/router';
import { AllAppointments } from "../../components/all-appointments/all-appointments";

@Component({
  selector: 'app-home-admin',
  imports: [TreeView, AllAppointments, Header],
  templateUrl: './home-admin.html',
  styleUrl: './home-admin.scss',
})
export class HomeAdmin {

    nodes: TreeNode[] = [
    {
      name: 'Pacient',
      isOpen: false,
      children: [
        { name: 'pacients', children: [] , link:'/patient/all'},
      ]
    },
    { 
      name: 'Schedules',
      isOpen: false,
      children: [
        { name: 'All Schedules', children: [] , link:'/schedule/all'},
        { name: 'New Schedule', children: [] , link:'/schedule/register'},
      ]
     },
     { 
      name: 'Medic',
      isOpen: false,
      children: [
        { name: 'All Medics', children: [] , link:'/medic/all'},
        { name: 'New Medic', children: [] , link:'/medic/register'},
      ]
     },
    { 
      name: 'Appointments',
      isOpen: false,
      children: [
        { name: 'All Appoinments', children: [], link:'/appointment/all' },
        { name: 'New Appoinment', children: [], link:'/appointment/register' },
      ]
     },
     { 
      name: 'Assistants',
      isOpen: false,
      children: [
        { name: 'All Assistents', children: [], link:'/assistent/all' },
        { name: 'New Assistents', children: [], link:'/assistent/register' },
      ]
     }
  ];
}
