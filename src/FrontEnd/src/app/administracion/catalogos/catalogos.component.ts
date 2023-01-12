import { Component, OnInit } from '@angular/core';
import { AdministracionService } from '../services/administracion.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { ResizeService } from 'src/app/layout/media-query/resize.service';

@Component({
  selector: 'app-catalogos',
  templateUrl: './catalogos.component.html',
  styleUrls: ['./catalogos.component.css']
})
export class CatalogosComponent implements OnInit {
  itemsCatalogos: ICatalogos[] = [];
  page: number = 1;
  mq:string = "";



  constructor(

    private http: AdministracionService,
    private resizeService: ResizeService,
  ) {
    this.resizeService.onResize$.subscribe(x => {
      this.mq = x;
    });

  }

  ngOnInit(): void {
    console.log("conjuntoPersonas", this.itemsCatalogos);
    console.log("mq", this.mq);
    this.obtenerCatalogos();
  }

   /**
    * obtenerCatalogos
    : void */
    public obtenerCatalogos() : void {
      this.http.GetCatalogos().subscribe(data => {
        this.itemsCatalogos = [...data];
      },
      error => {
        Swal.fire({
          title: 'Consulta de Catálogo',
          text: error.mensaje,
          icon: error.estado,
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'Aceptar'
        })
      })
    }

  btnGuardar () {
    console.log("Entro al evento");
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

