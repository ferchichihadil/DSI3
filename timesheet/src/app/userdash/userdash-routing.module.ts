import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserdashComponent } from './userdash.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectsManagementComponent } from './projects-management/projects-management.component';
import { ReportsComponent } from './reports/reports.component';
import { TimesheetEntryComponent } from './timesheet-entry/timesheet-entry.component';

const routes: Routes = [{ path: '', component: UserdashComponent ,
  children:[
    { path: '', redirectTo: '/userdash/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'Projects Managment', component:ProjectsManagementComponent},
    { path:'Reports',component:ReportsComponent},
    { path:'TimeSheet',component:TimesheetEntryComponent},
  ]
 }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserdashRoutingModule { }
