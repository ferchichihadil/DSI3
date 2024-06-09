import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashComponent } from './admindash.component';
import { MainComponent } from './main/main.component';
import { ListesemplyesComponent } from './listesemplyes/listesemplyes.component';
import { ListesprojetsComponent } from './listesprojets/listesprojets.component';
import { ClientsComponent } from './clients/clients.component';


const routes: Routes = [{ path: '', component: AdmindashComponent ,
  children:[
    { path: '', redirectTo: '/admindash/main', pathMatch: 'full' },
    { path: 'main', component: MainComponent },
    { path: 'listesemplyes', component: ListesemplyesComponent },
    { path: 'listesprojets', component: ListesprojetsComponent },
    { path: 'clients', component: ClientsComponent },
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmindashRoutingModule { }
