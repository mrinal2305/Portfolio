import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';
import { SkillComponent } from './skill/skill.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ContactComponent } from './contact/contact.component';
import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';  

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectComponent,
    SkillComponent,
    EducationComponent,
    ExperienceComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    LazyLoadImageModule,
    AnimateOnScrollModule.forRoot(),
    NgCircleProgressModule.forRoot({
      radius: 60,
      space: -7,
      outerStrokeGradient: true,
      outerStrokeWidth: 5,
      outerStrokeColor: "#6d6d6d",
      outerStrokeGradientStopColor: "#6d6d6d",
      innerStrokeColor: "#e7e8e1",
      innerStrokeWidth: 3,
      title: "UI",
      animateTitle: false,
      animationDuration: 1000,
      titleFontSize: "20",
      subtitleFontSize: "13",
      subtitle : "hello",
      showUnits: false,
      showBackground: false,
      clockwise: false,
      startFromZero: false,
      titleColor : "#6d6d6d"
    }),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production,registrationStrategy: 'registerImmediately' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
