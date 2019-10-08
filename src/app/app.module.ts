import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { AboutSiteComponent } from './components/about-site/about-site.component';
import { SkillsComponent } from './components/home/skills/skills.component';
import { ExperienceComponent } from './components/home/experience/experience.component';
import { LandingPageComponent, ModalTemplateComponent } from './components/home/landing-page/landing-page.component';

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
    ModalTemplateComponent
  ],
  entryComponents: [ModalTemplateComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
