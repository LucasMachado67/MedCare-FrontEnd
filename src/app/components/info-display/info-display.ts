import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-display',
  imports: [],
  templateUrl: './info-display.html',
  styleUrl: './info-display.scss',
})
export class InfoDisplay {

  @Input({required: true}) label!: string;
  @Input({required: true}) text!: string;
}
