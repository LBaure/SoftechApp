import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/utils/auth.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  public menu : any[] = [];
  @Output() closeSide = new EventEmitter();
  constructor( private auth: AuthService,) {
  //   this.menu = [
  //     {
  //        "idOpcionMenu":1,
  //        "idOpcionPadre":null,
  //        "nombre":"Administración de Inmuebles",
  //        "url":"/inicio/dashboard",
  //        "opciones":[
  //           {
  //              "idOpcionMenu":2,
  //              "idOpcionPadre":1,
  //              "nombre":"Registro de Inmueble",
  //              "url":"/administracionInmueble/registro",
  //              "opciones":[

  //              ]
  //           },
  //           {
  //              "idOpcionMenu":3,
  //              "idOpcionPadre":1,
  //              "nombre":"Actualización Inmueble",
  //              "url":"/administracionInmueble/actualizacion-inmueble",
  //              "opciones":[

  //              ]
  //           },
  //           {
  //              "idOpcionMenu":4,
  //              "idOpcionPadre":1,
  //              "nombre":"Baja Inmueble",
  //              "url":"/administracionInmueble/baja-inmueble",
  //              "opciones":[

  //              ]
  //           },
  //           {
  //              "idOpcionMenu":5,
  //              "idOpcionPadre":1,
  //              "nombre":"Reactivación Inmueble",
  //              "url":"/administracionInmueble/reactivar-inmueble",
  //              "opciones":[

  //              ]
  //           },
  //           {
  //              "idOpcionMenu":6,
  //              "idOpcionPadre":1,
  //              "nombre":"Revisión de Gestiones de Inmueble",
  //              "url":"/administracionInmueble/revisar-inmueble",
  //              "opciones":[

  //              ]
  //           },
  //           {
  //              "idOpcionMenu":7,
  //              "idOpcionPadre":1,
  //              "nombre":"Movimientos de Legajos",
  //              "url":"/administracionInmueble/movimientos-legajos",
  //              "opciones":[

  //              ]
  //           },
  //           {
  //              "idOpcionMenu":8,
  //              "idOpcionPadre":1,
  //              "nombre":"Asociar Documentos",
  //              "url":"/administracionInmueble/asociar-doctos",
  //              "opciones":[

  //              ]
  //           }
  //        ]
  //     },
  //     {
  //        "idOpcionMenu":9,
  //        "idOpcionPadre":null,
  //        "nombre":"Administración de Afectaciones",
  //        "url":"/inicio/dashboard",
  //        "opciones":[
  //           {
  //              "idOpcionMenu":10,
  //              "idOpcionPadre":9,
  //              "nombre":"Registro de Afectación",
  //              "url":"/administracionAfectacion/registro",
  //              "opciones":[

  //              ]
  //           },
  //           {
  //              "idOpcionMenu":11,
  //              "idOpcionPadre":9,
  //              "nombre":"Actualización de Afectación",
  //              "url":"/administracionAfectacion/registro-actualizacion",
  //              "opciones":[

  //              ]
  //           },
  //           {
  //              "idOpcionMenu":12,
  //              "idOpcionPadre":9,
  //              "nombre":"Cancelación de Afectación",
  //              "url":"/administracionAfectacion/cancelacion-afectacion",
  //              "opciones":[

  //              ]
  //           },
  //           {
  //              "idOpcionMenu":13,
  //              "idOpcionPadre":9,
  //              "nombre":"Revisión de Gestiones Afectación",
  //              "url":"/administracionAfectacion/revisar-afectacion",
  //              "opciones":[

  //              ]
  //           }
  //        ]
  //     },
  //     {
  //        "idOpcionMenu":14,
  //        "idOpcionPadre":null,
  //        "nombre":"Administración de Arrendamientos",
  //        "url":"/inicio/dashboard",
  //        "opciones":[
  //           {
  //              "idOpcionMenu":15,
  //              "idOpcionPadre":14,
  //              "nombre":"Registro de Arrendamientos",
  //              "url":"/administrarArrendamiento/registro",
  //              "opciones":[

  //              ]
  //           },
  //           {
  //              "idOpcionMenu":16,
  //              "idOpcionPadre":14,
  //              "nombre":"Registro de Convenio",
  //              "url":"/administrarArrendamiento/convenio",
  //              "opciones":[

  //              ]
  //           },
  //           {
  //              "idOpcionMenu":17,
  //              "idOpcionPadre":14,
  //              "nombre":"Control de pagos",
  //              "url":"/administrarArrendamiento/control-pagos",
  //              "opciones":[

  //              ]
  //           },
  //           {
  //              "idOpcionMenu":18,
  //              "idOpcionPadre":14,
  //              "nombre":"Revisión de Arrendamientos y Convenios",
  //              "url":"/administrarArrendamiento/revision",
  //              "opciones":[

  //              ]
  //           }
  //        ]
  //     },
  //     {
  //        "idOpcionMenu":19,
  //        "idOpcionPadre":null,
  //        "nombre":"Administración",
  //        "url":"/inicio/dashboard",
  //        "opciones":[
  //           {
  //              "idOpcionMenu":20,
  //              "idOpcionPadre":19,
  //              "nombre":"Administración de Usuarios Internos",
  //              "url":"/administracion/usuarios-internos",
  //              "opciones":[

  //              ]
  //           },
  //           {
  //              "idOpcionMenu":21,
  //              "idOpcionPadre":19,
  //              "nombre":"Administración de Usuarios Externos",
  //              "url":"/dashboard",
  //              "opciones":[

  //              ]
  //           },
  //           {
  //              "idOpcionMenu":22,
  //              "idOpcionPadre":19,
  //              "nombre":"Administración de Catalogos",
  //              "url":"catalogos",
  //              "opciones":[

  //              ]
  //           },
  //           {
  //              "idOpcionMenu":59,
  //              "idOpcionPadre":19,
  //              "nombre":"Home",
  //              "url":"publico/home",
  //              "opciones":[]
  //           }
  //        ]
  //     },
  //     {
  //        "idOpcionMenu":23,
  //        "idOpcionPadre":null,
  //        "nombre":"Gestión de Solicitudes",
  //        "url":"/inicio/dashboard",
  //        "opciones":[
  //           {
  //              "idOpcionMenu":24,
  //              "idOpcionPadre":23,
  //              "nombre":"Registro de Solicitudes",
  //              "url":"/inicio/dashboard",
  //              "opciones":[
  //                 {
  //                    "idOpcionMenu":25,
  //                    "idOpcionPadre":24,
  //                    "nombre":"Solicitud externa de información",
  //                    "url":"/administracionSolicitudes/Externa",
  //                    "opciones":[

  //                    ]
  //                 }
  //              ]
  //           },
  //           {
  //              "idOpcionMenu":26,
  //              "idOpcionPadre":23,
  //              "nombre":"Administración de Solicitudes",
  //              "url":"/inicio/dashboard",
  //              "opciones":[
  //                 {
  //                    "idOpcionMenu":27,
  //                    "idOpcionPadre":26,
  //                    "nombre":"Distribución de Solicitudes",
  //                    "url":"/administracionSolicitudes/Distribucion-solicitud",
  //                    "opciones":[

  //                    ]
  //                 }
  //              ]
  //           },
  //           {
  //              "idOpcionMenu":31,
  //              "idOpcionPadre":23,
  //              "nombre":"Atención a Solicitudes de Información",
  //              "url":"/administracionSolicitudes/Atender-solicitud",
  //              "opciones":[

  //              ]
  //           },
  //           {
  //              "idOpcionMenu":29,
  //              "idOpcionPadre":23,
  //              "nombre":"Revisón de Repuesta",
  //              "url":"/administracionSolicitudes/EnRevision",
  //              "opciones":[

  //              ]
  //           },
  //           {
  //              "idOpcionMenu":30,
  //              "idOpcionPadre":23,
  //              "nombre":"Firma Repuesta",
  //              "url":"/administracionSolicitudes/bandeja-firma-electronica",
  //              "opciones":[

  //              ]
  //           }
  //        ]
  //     },
  //     {
  //        "idOpcionMenu":32,
  //        "idOpcionPadre":null,
  //        "nombre":"Reportes",
  //        "url":null,
  //        "opciones":[
  //           {
  //              "idOpcionMenu":33,
  //              "idOpcionPadre":32,
  //              "nombre":"Reporte de Bienes Inmuebles con Afectaciones Asociadas",
  //              "url":"/reportes/bi-afectaciones-asociadas",
  //              "opciones":[

  //              ]
  //           },
  //           {
  //              "idOpcionMenu":34,
  //              "idOpcionPadre":32,
  //              "nombre":"Reporte Detallado de Inmuebles por Entidad, Departamento y Municipio",
  //              "url":"/reportes/InmuebleEntidadDeptoMunicipio",
  //              "opciones":[

  //              ]
  //           },
  //           {
  //              "idOpcionMenu":35,
  //              "idOpcionPadre":32,
  //              "nombre":"Reporte Consolidado General por Entidad de Inmuebles y Afectaciones",
  //              "url":"/reportes/ConsolidadoEntidadInmueblesAfectaciones",
  //              "opciones":[

  //              ]
  //           },
  //           {
  //              "idOpcionMenu":36,
  //              "idOpcionPadre":32,
  //              "nombre":"Reporte General de Bienes Inmuebles del Estado",
  //              "url":"/reportes/GeneralBienesInmueblesEstado",
  //              "opciones":[

  //              ]
  //           },
  //           {
  //              "idOpcionMenu":37,
  //              "idOpcionPadre":32,
  //              "nombre":"Reporte General de Afectaciones ",
  //              "url":"/reportes/GeneralAfectaciones",
  //              "opciones":[

  //              ]
  //           },
  //           {
  //              "idOpcionMenu":38,
  //              "idOpcionPadre":32,
  //              "nombre":"Reporte Ficha de Inmueble",
  //              "url":"/reportes/FichaInmueble",
  //              "opciones":[

  //              ]
  //           }
  //        ]
  //     },
  //     {
  //        "idOpcionMenu":39,
  //        "idOpcionPadre":null,
  //        "nombre":"Consultas",
  //        "url":"/consulta",
  //        "opciones":[
  //           {
  //              "idOpcionMenu":28,
  //              "idOpcionPadre":39,
  //              "nombre":"Consulta de Inmuebles",
  //              "url":"/consulta/Inmueble",
  //              "opciones":[

  //              ]
  //           },
  //           {
  //              "idOpcionMenu":41,
  //              "idOpcionPadre":39,
  //              "nombre":"Consulta de Afectaciones",
  //              "url":"/consulta/Afectaciones",
  //              "opciones":[

  //              ]
  //           },
  //           {
  //              "idOpcionMenu":40,
  //              "idOpcionPadre":39,
  //              "nombre":"Consulta de Inmueble de Baja",
  //              "url":"/consulta/InmuebleBaja",
  //              "opciones":[

  //              ]
  //           },
  //           {
  //              "idOpcionMenu":42,
  //              "idOpcionPadre":39,
  //              "nombre":"Consulta de Solicitudes de Información",
  //              "url":"/consulta/InmuebleSolicitud",
  //              "opciones":[

  //              ]
  //           }
  //        ]
  //     }
  //  ]
  }

  ngOnInit(): void {
    this.menu = this.auth.getMenu();
    console.log("this.menu", this.menu);

  }

  toggle() {
    this.closeSide.emit(0);
  }

}
