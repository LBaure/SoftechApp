import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class StartupConfigurationService {

  public usuario = {} as UsuarioSSOModelo;
  public a1: Partial<UsuarioSSOModelo> = {};

  constructor(private http: HttpClient, private injector: Injector) { }

  public load() {
    console.log("load");
    console.log("usuario", this.usuario);
    console.log("a1", this.a1);

    return this.http.get<UsuarioSSOModelo>('/api/sso/usuario').toPromise().then(usuario => {
      console.log("devuelve", usuario);
      this.usuario = usuario;
    });
  }

}


export interface UsuarioSSOModelo {
  nit: string;
  name: string;
  isAuthenticated: boolean;
  perfil: Perfil;
}

export interface Perfil {
  menu: Opcion[];
  estado: Estado;
  roles: Rol[];
}

export interface Estado {
  idEstado: number;
  nombre: string;
  estilo: string;
}

export interface Opcion {
  idOpcionMenu: number;
  idOpcionPadre: number;
  nombre: string;
  url: string;
  opciones: Opcion[];
}

export interface Rol {
  rolId: number;
  nombre: string;
}
