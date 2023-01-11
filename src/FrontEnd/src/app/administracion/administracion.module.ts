import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { UsuariosInternosComponent } from './usuarios-internos/usuarios-internos.component';
import { CatalogosComponent } from './catalogos/catalogos.component';
import { UsuariosExternosComponent } from './usuarios-externos/usuarios-externos.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    UsuariosInternosComponent,
    CatalogosComponent,
    UsuariosExternosComponent
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule,
    TooltipModule.forRoot(),
    NgxPaginationModule,
  ]
})
export class AdministracionModule { }
