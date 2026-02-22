import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile-button',
  imports: [],
  templateUrl: './profile-button.html',
  styleUrl: './profile-button.scss',
})
export class ProfileButton {

  @Input({required: true}) texto!: string;
}
