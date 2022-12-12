import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { UsuariosInternosComponent } from './usuarios-internos/usuarios-internos.component';
import { CatalogosComponent } from './catalogos/catalogos.component';


@NgModule({
  declarations: [
    UsuariosInternosComponent,
    CatalogosComponent
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule
  ]
})
export class AdministracionModule { }
