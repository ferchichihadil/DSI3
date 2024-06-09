import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { AdmindashRoutingModule } from './admindash-routing.module';
import { AdmindashComponent } from './admindash.component';

import { SidenavComponent } from './sidenav/sidenav.component';
import { ListesprojetsComponent } from './listesprojets/listesprojets.component';
import { ListesemplyesComponent } from './listesemplyes/listesemplyes.component';
import { MainComponent } from './main/main.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { ClientsComponent } from './clients/clients.component';
import { FormsModule } from '@angular/forms'; 




@NgModule({
  declarations: [
    AdmindashComponent,
    SidenavComponent,
    ListesprojetsComponent,
    ListesemplyesComponent,
    MainComponent,
    HeaderComponent,
    ClientsComponent,
    


    
   
  ],
  imports: [
    CommonModule,
    AdmindashRoutingModule,
    ReactiveFormsModule,
    FormsModule
   
   
  ]
})
export class AdmindashModule { }
