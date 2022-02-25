import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {LogsComponent} from "./pages/logs/logs.component";
import {ComputersComponent} from "./pages/computers/computers.component";
import {RequestsComponent} from "./pages/requests/requests.component";
import {ConfigEditComponent} from "./pages/dashboard/config-edit/config-edit.component";
import {LoginComponent} from "./pages/login/login.component";
import {ConfigScheduleComponent} from "./pages/dashboard/config-schedule/config-schedule.component";

const routes: Routes = [
  {path: '',
  component: LoginComponent},
  {path: 'configurations',
    component: DashboardComponent},
  {path: 'logs',
  component: LogsComponent},
  {path: 'computers',
  component: ComputersComponent},
  {path: 'requests',
  component: RequestsComponent},
  {path: 'configurations/configedit',
  component: ConfigEditComponent},
  {path: 'configurations/configschedule',
  component: ConfigScheduleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
