import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router'; // Import RouterModule and Routes for routing

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './_component/navbar/navbar/navbar.component';
import { BannerComponent } from './_component/banner/banner/banner.component';
import { ProjectsComponent } from './_component/projects/projects/projects.component';
import { SkillsComponent } from './_component/Skills/skills/skills.component';
import { HomeComponent } from './home/home/home.component';
import { AboutComponent } from './_component/about/about/about.component';
import { ExperienceComponent } from './_component/experience/experience/experience.component';
import { ContactComponent } from './_component/contact/contact/contact.component';
import { FooterComponent } from './_component/footer/footer/footer.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'banner', component: BannerComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'expert', component: ExperienceComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    ProjectsComponent,
    SkillsComponent,
    HomeComponent,
    AboutComponent,
    ExperienceComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes) // Include RouterModule.forRoot() here
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule] // Export RouterModule
})
export class AppModule { }
