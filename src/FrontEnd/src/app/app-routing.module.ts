import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'administracion',
    loadChildren: () => import('./administracion/administracion.module').then(el => el.AdministracionModule)
  },
  {
    path: 'publico',
    loadChildren: () => import('./publico/publico.module').then(el => el.PublicoModule)

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
