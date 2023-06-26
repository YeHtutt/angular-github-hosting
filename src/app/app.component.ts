import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-github-hosting-project';

  constructor(public router: Router) {} //route implementieren um darkMode zu dynamisieren - wichtig public!
}
