import { Component, OnInit } from '@angular/core';
import { ResultadosService } from 'src/app/services/resultados.service';

@Component({
  selector: 'app-puntajes',
  templateUrl: './puntajes.component.html',
  styleUrls: ['./puntajes.component.css']
})
export class PuntajesComponent implements OnInit {

  puntajes : any;
  aletero:any;
  lozin:any;
  panchin:any;
  traidorcin:any;
  mari:any;

  constructor(private service:ResultadosService) { 
    this.service.puntajes().subscribe((data:any)=>{
      
      this.puntajes = data.Puntaje;
      this.puntajes.sort((a:any, b:any)=> {
        if (Number(a.puntos) < Number(b.puntos)) {
          return 1;
        }
        if (Number(a.puntos) > Number(b.puntos)) {
          return -1;
        }
        // a must be equal to b
        return 0;
      });
    })
  }

  ngOnInit(): void {
  }

  actualizar(){

    const data = {
      Puntaje:[
        {
          nombre: "Aleterin",
          puntos: Number(this.aletero)
        },
        {
          nombre: "Lozin",
          puntos: Number(this.lozin)
        },
        {
          nombre: "Panchin",
          puntos: Number(this.panchin)
        },
        {
          nombre: "Traidorcin",
          puntos: Number(this.traidorcin)
        },
        {
          nombre: "Mari",
          puntos: Number(this.mari)
        }
      ]
    }

    this.service.actualizarPuntajes(data).then(()=>{
      this.aletero="";
      this.lozin="";
      this.mari="";
      this.traidorcin="";
      this.panchin="";
    });
  }
}
