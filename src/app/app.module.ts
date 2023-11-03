import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './AppComponent';
import { WorkComponent } from './work/work.component';
import { AddTasksComponent } from './work/add-tasks/add-tasks.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkComponent,
    AddTasksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
