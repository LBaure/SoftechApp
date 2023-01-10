import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {
  public rutasUsuario: Opcion[] = [ {idOpcionMenu: 0, idOpcionPadre: 0, nombre:"", url: '/inicio/dashboard', opciones:[]}];
  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    const canActivate = this.auth.isAuthenticated();
    if (!canActivate) {
      return this.router.navigate(['login']);
    }


    const routeActually = state.url;
    const menusAllows = this.auth.getMenu();
    console.log("menusAllows", menusAllows);
    menusAllows.forEach(element => {
      this.rutasUsuario.push(...element.opciones)
    });

    // Busca entre todas las rutas del menú, si la ruta actual pertenece al conjunto
    // de rutas que el usuario tiene permitido navegar.
    var urlFiltrada = this.rutasUsuario.find(element => element.url === routeActually)
    // si no se encuentra la ruta actual, se enviara a una pagina de error
    if(!urlFiltrada) {
        // this.router.navigate(['NotFound']);
    }

    return canActivate;
  }
}

export interface Opcion {
  idOpcionMenu: number;
  idOpcionPadre: number;
  nombre: string;
  url: string;
  opciones: Opcion[];
}
