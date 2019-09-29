import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { LessonComponent } from './components/lesson/lesson.component';
import { ReseterComponent } from './components/reseter/reseter.component';

@NgModule({
  declarations: [
    AppComponent,
    ScheduleComponent,
    LessonComponent,
    ReseterComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
