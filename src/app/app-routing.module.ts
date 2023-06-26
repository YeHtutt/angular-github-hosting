import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImprintComponent } from './imprint/imprint.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutMeComponent } from './about-me/about-me.component';

const routes: Routes = [
  { path: '', component: SlideshowComponent }, //wenn bei route gar nicht ist Bilder-Slideshow(Home) angezeigt werden
  { path: 'imprint', component: ImprintComponent }, //wenn route /imprint hinten ist, dann soll zur Impressum-seite umgeleitet werden
  { path: 'projects', component: ProjectsComponent },
  { path: 'about-me', component: AboutMeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
