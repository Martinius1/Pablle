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
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
