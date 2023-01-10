import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StartupConfigurationService } from './utils/startup-configuration.service';
import { UtilsModule } from './utils/utils.module';
import { ActivatedRouteSnapshot } from '@angular/router';

export function StartupConfigurationServiceFactory(config: StartupConfigurationService): Function {
  return () => config.load();
}

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    UtilsModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: StartupConfigurationServiceFactory,
      deps: [StartupConfigurationService],
      multi: true,
    },
    {
        provide: 'externalUrlRedirectResolver',
        useValue: (route: ActivatedRouteSnapshot) => {
            window.location.href = (route.data as any).externalUrl;
        }
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
