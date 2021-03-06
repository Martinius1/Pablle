import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LogsComponent } from './pages/logs/logs.component';
import { RequestsComponent } from './pages/requests/requests.component';
import { ComputersComponent } from './pages/computers/computers.component';
import { SearchBarComponent } from './compoments/search-bar/search-bar.component';
import { ConfigEditComponent } from './pages/dashboard/config-edit/config-edit.component';
import { SideBarComponent } from './compoments/side-bar/side-bar.component';
import { LoginComponent } from './pages/login/login.component';
import { ConfigScheduleComponent } from './pages/dashboard/config-schedule/config-schedule.component';
import { MsgLogsComponent } from './pages/logs/msg-logs/msg-logs.component';
import { AlertLogComponent } from './pages/logs/alert-log/alert-log.component';
import {MatButtonModule} from "@angular/material/button";
import { ConfigTypeComponent } from './pages/dashboard/config-type/config-type.component';
import { CreateGroupComponent } from './pages/computers/create-group/create-group.component';
import { DashboardSampleComponent } from './pages/dashboard/dashboard-sample/dashboard-sample.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LogsComponent,
    RequestsComponent,
    ComputersComponent,
    SearchBarComponent,
    ConfigEditComponent,
    SideBarComponent,
    LoginComponent,
    ConfigScheduleComponent,
    MsgLogsComponent,
    AlertLogComponent,
    ConfigTypeComponent,
    CreateGroupComponent,
    DashboardSampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
