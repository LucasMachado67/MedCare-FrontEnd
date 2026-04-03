import { Component, input, Input, OnInit } from '@angular/core';
import { UserListData } from '../../interfaces/UserListData';

@Component({
  selector: 'app-user-list',
  imports: [],
  templateUrl: './user-list.html',
  styleUrl: './user-list.scss',
})
export class UserList {
  
  @Input() user!: UserListData;
  
}
