import { Component, OnInit } from '@angular/core';
import { ResultadosService } from 'src/app/services/resultados.service';

@Component({
  selector: 'app-semis-final',
  templateUrl: './semis-final.component.html',
  styleUrls: ['./semis-final.component.css']
})
export class SemisFinalComponent implements OnInit {

  participante:any = "";
  partidosSemis:any;
  partidoFinal:any;

  constructor(private service:ResultadosService) { 
    this.service.obtenerSemis().subscribe((data:any)=>{
      this.partidosSemis=data.partidos;
    })
    this.service.obtenerFinal().subscribe((data:any)=>{
      this.partidoFinal=data;
    })
  }

  ngOnInit(): void {
  }

}
