import { Component, Input } from '@angular/core';
import { TreeNode } from '../../interfaces/TreeNode';
import { TreeView } from "../tree-view/tree-view";
import { trigger, transition, style, animate } from '@angular/animations';
import { LoginService } from '../../services/loginService';
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
  
  constructor(private loginService:LoginService){}
  
  @Input() nodes: TreeNode[] = [];

  isOpen = false;

  activateSideBar():void{
    if(this.isOpen == false){
      this.isOpen = true;
    }else{
      this.isOpen = false;
    }
  }

  logout() {
    this.loginService.logout();
  }

  company: string | null = sessionStorage.getItem('companyName');
}
