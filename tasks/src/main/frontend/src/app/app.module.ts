import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TasksComponent} from './tasks/tasks.component';
import {TasksListComponent} from './tasks/tasks-list/tasks-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    TasksListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
