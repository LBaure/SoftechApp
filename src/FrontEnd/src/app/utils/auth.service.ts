import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { StartupConfigurationService } from './startup-configuration.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Allows you to show if the user is connected.
  private isAuth : boolean = false;

  constructor (
    private config : StartupConfigurationService,
    private router : Router
  ) {
    this.isAuth = this.isAuthenticated();
  }

  /**
   * isAuthenticated
   * lets you know if the user is logged in
   */
  public isAuthenticated() {
    return this.config.usuario.isAuthenticated;
  }


 /**
  * getMenu
  * gets the paths that the user has access to
  */
  public getMenu() {
    if (!this.isAuth) {
        this.router.navigate(['login']);
    }
    return this.config.usuario.perfil.menu;
  }

  public getUser() {
    if (!this.isAuth) {
      this.router.navigate(['login']);
    }
    return this.config.usuario;
  }

}
