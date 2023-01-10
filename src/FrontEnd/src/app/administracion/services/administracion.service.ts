import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Injectable({
  providedIn: 'root'
})
export class AdministracionService {

  constructor( private http: HttpClient ) { }

  GetCatalogos() : Observable<any>{
    const url = `api/Administracion/catalogos`;
    return this.http.get<ICatalogos>(url).pipe(
      catchError(this.handleError)
    )
  }

  public handleError(error: HttpErrorResponse){
    if (error.status === 504) {
      return Swal.fire({
        title: 'Error de Comunicación',
        text: "Se ha agotado el tiempo de espera, no se ha podido establecer comunicacion con los servicios.",
        icon: "error"
      });
    }
    let responseError = {} as ClientError;
    if (error.status === 400) {
      responseError.status = error.status
      responseError.mensaje = error.error.mensaje;
      responseError.estado = error.error.estado;
    } else if (error.status === 504) {
      responseError.status = error.status
      responseError.mensaje = 'No se ha podido establecer comunicación SIRBIE.';
      responseError.estado = error.error;
    }
    else {
      responseError.status = error.status
      responseError.mensaje = 'error';
      responseError.estado = error.error;
    }
    return throwError(responseError);
  }


}
interface ICatalogos {
    idCatalogo : number;
    nombre : string;
    descripcion? : string;
    tipoCatalogo? : number;
    activo? : number;
    tipoCatalogoTexto? : string;
}


interface ClientError {
  status: number;
  estado: string;
  mensaje: string;
}
