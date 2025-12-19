import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navigation-button',
  imports: [CommonModule],
  templateUrl: './navigation-button.html',
  styleUrl: './navigation-button.scss',
})
export class NavigationButton {

  @Input() title: string = 'Título Padrão';
  @Input() iconClass: string = 'fa-solid fa-book';
  @Input() route: string = '/'; 
}
