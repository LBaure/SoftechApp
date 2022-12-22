import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalogos',
  templateUrl: './catalogos.component.html',
  styleUrls: ['./catalogos.component.css']
})
export class CatalogosComponent implements OnInit { 
  personaRegistrar : persona = {
    id: 0,
    direccion: '',
    nombre: '',
    edad: 0,
    nacionalidad: '',
    lugarNac: '',
    estadoCivil: '',
    dpi: 0,
    telefono: 0
  }
  estadosCiviles : estado[] = [
    {
      id:1,
      nombre: "Casado"
    },
    {
      id:2,
      nombre: "Soltero"
    },
    {
      id:3,
      nombre: "Divorciado"
    },
    {
      id:4,
      nombre: "Unión Libre"
    }
  ]
  nacionalidades : nacionalidad[] = [
    {
       id: 1,
      nombre : "Guatemalteca"
    },
    {
       id: 2,
      nombre : "Hondureño"
    },
    {
       id: 3,
      nombre : "Salvadoreño"
    },
    { 
      id: 4,
      nombre : "Mexicana"
    },
    { 
      id: 5,
      nombre : "Peruana"
    },
    {
       id: 6,
      nombre : "Ecuatoriana"
    },
    { 
      id: 7,
      nombre : "Nicaraguense"
    },
    { 
      id: 8,
      nombre : "Canadiense"
    },
    { 
      id: 9,
      nombre : "Italiana"
    },
    { 
      id: 10,
      nombre : "Sueca"
    }
    ]
    conjuntoPersonas : persona[] = [];

    
  constructor() { }

  ngOnInit(): void {    
    console.log("conjuntoPersonas", this.conjuntoPersonas);
    var myJson = {
      listado: this.conjuntoPersonas
    }
    console.log("este es un json", myJson)
    
  }

  btnGuardar () {
    console.log("Entro al evento");
    var formulario = document.querySelector("form");
    
    if (formulario) {
      let form1 = new FormData(formulario);
      let objPersona : persona = {
        id: 0,
        direccion: '',
        nombre: '',
        edad: 0,
        nacionalidad: '',
        lugarNac: '',
        estadoCivil: '',
        dpi: 0,
        telefono: 0,

      };
      
      form1.forEach((value, key) => {
        switch (key) {
          case 'direccion':
            objPersona.direccion = value.toString();            
            break;
          case 'nombre':
            objPersona.nombre = value.toString();            
            break;  
          case 'edad':
            objPersona.edad = Number(value);            
            break;
          case 'nacionalidad':
            objPersona.nacionalidad = value.toString();            
            break;  
          case 'lugarNac':
            objPersona.lugarNac = value.toString();            
            break;  
          case 'estadoCivil':
            objPersona.estadoCivil = value.toString();            
            break;    
          case 'dpi':
            objPersona.dpi = Number(value);     
            break;  
          case 'telefono':
            objPersona.telefono = Number(value);
            break 
        }
      })
      console.log("objeto despues del for", objPersona);
      this.conjuntoPersonas.push(objPersona);
    } 
  }
}

interface persona  {
  id:number,
  direccion:string,
  nombre:string,
  edad:number,
  nacionalidad:string,
  lugarNac:string,
  estadoCivil:string,
  dpi:number,
  telefono:number
}
interface estado {
  id: number,
  nombre: string
}
interface nacionalidad {
  id: number,
  nombre: string
}

