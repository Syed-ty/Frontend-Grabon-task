import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { RequirementsComponent } from './requirements/requirements.component';

const routes: Routes = [  {path:'',redirectTo:'requirements',pathMatch:'full'},
{ path: '', component: DashboardComponent, children: [
  {path:'requirements',component:RequirementsComponent},
],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
