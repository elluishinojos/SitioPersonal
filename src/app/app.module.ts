import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { AboutSiteComponent } from './components/about-site/about-site.component';
import { SkillsComponent } from './components/home/skills/skills.component';
import { ExperienceComponent } from './components/home/experience/experience.component';
import { LandingPageComponent } from './components/home/landing-page/landing-page.component';
import { ModalComponent } from './components/shared/modal/modal.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutMeComponent,
    AboutSiteComponent,
    SkillsComponent,
    ExperienceComponent,
    LandingPageComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
