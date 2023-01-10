import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { MarcoGeneralComponent } from './marco-general/marco-general.component';
import { FooterComponent } from './footer/footer.component';
import { AdministracionRoutingModule } from '../administracion/administracion-routing.module';
import { RedirectComponent } from './redirect/redirect.component';



@NgModule({
  declarations: [
    NavBarComponent,
    SideBarComponent,
    MarcoGeneralComponent,
    FooterComponent,
    RedirectComponent
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule
  ],
  exports: [
    NavBarComponent,
    SideBarComponent,
    MarcoGeneralComponent
  ]
})
export class LayoutModule { }
