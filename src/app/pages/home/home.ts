import { Component } from '@angular/core';
import { Header } from "../../components/header/header";
import { NavigationButton } from "../../components/navigation-button/navigation-button";

@Component({
  selector: 'app-home',
  imports: [Header, NavigationButton],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
}
