import { Component, Input, OnInit } from '@angular/core';
import { UserListData } from '../../interfaces/UserListData';
import { LoginService } from '../../services/loginService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  imports: [],
  templateUrl: './user-list.html',
  styleUrl: './user-list.scss',
})
export class UserList {
  
  @Input() user!: UserListData;
  constructor(private router:Router){}

  getUserInfo(id:number){
    
  }

  get currentPath(): string {
    return this.router.url;
  }

}
