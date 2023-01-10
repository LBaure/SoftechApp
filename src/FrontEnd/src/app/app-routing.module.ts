import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from 'src/environments/environment';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RedirectComponent } from './layout/redirect/redirect.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
      path: 'login',
      component: RedirectComponent,
      resolve: { url: 'externalUrlRedirectResolver' },
      data: { externalUrl: environment.ssoLogin }
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
