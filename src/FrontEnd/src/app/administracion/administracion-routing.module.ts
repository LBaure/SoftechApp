import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogosComponent } from './catalogos/catalogos.component';
import { UsuariosInternosComponent } from './usuarios-internos/usuarios-internos.component';

const routes: Routes = [
  {
    path: 'usuarios-internos',
    component: UsuariosInternosComponent,
  },
  {
    path: 'catalogos',
    component: CatalogosComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
