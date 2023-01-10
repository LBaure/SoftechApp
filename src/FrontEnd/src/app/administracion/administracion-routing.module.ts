import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from '../utils/auth-guard.service';
import { CatalogosComponent } from './catalogos/catalogos.component';
import { UsuariosExternosComponent } from './usuarios-externos/usuarios-externos.component';
import { UsuariosInternosComponent } from './usuarios-internos/usuarios-internos.component';

const routes: Routes = [
  {
    path: 'usuarios-internos',
    component: UsuariosInternosComponent,
    canActivate: [AuthGuardService],
    canLoad: [AuthGuardService],
    canActivateChild: [AuthGuardService]
  },
  {
    path: 'catalogos',
    component: CatalogosComponent,
    canActivate: [AuthGuardService],
    canLoad: [AuthGuardService],
    canActivateChild: [AuthGuardService]
  },
  {
    path: 'usuarios-externos',
    component: UsuariosExternosComponent,
    canActivate: [AuthGuardService],
    canLoad: [AuthGuardService],
    canActivateChild: [AuthGuardService]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
