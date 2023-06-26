import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() darkMode = true; //Input Annotation (extra Eigenschaft einer Variable oder Funktion)
                            //hier- damit man z.B. darkMode von Außen zu bestimmen
}
