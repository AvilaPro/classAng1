import { Component } from '@angular/core';

@Component({
  selector: 'app-direstruc',
  templateUrl: './direstruc.component.html',
  styleUrls: ['./direstruc.component.scss']
})
export class DirestrucComponent {
  verReprobados: boolean = false;

  estudianteSeleccionado: any;

  estudiantes = [
    {
      "nombre": "Juan",
      "apellido":"Perez",
      "notaFinal":80,
      "aprobado" : true
    },
    {
      "nombre": "Maria",
      "apellido":"Gomez",
      "notaFinal":95,
      "aprobado" : true
    },
    {
      "nombre": "Jose",
      "apellido":"Ahi",
      "notaFinal":70,
      "aprobado" : true
    },
    {
      "nombre": "Fulanito",
      "apellido":"Detal",
      "notaFinal":40,
      "aprobado" : false
    }
  ]
}
