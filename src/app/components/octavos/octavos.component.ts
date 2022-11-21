import { Component, OnInit } from '@angular/core';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { ResultadosService } from 'src/app/services/resultados.service';

import html2canvas from 'html2canvas';
import Swal from 'sweetalert2'
import jsPDF from 'jspdf';

@Component({
  selector: 'app-octavos',
  templateUrl: './octavos.component.html',
  styleUrls: ['./octavos.component.css']
})
export class OctavosComponent implements OnInit {

  participante:any = "";
  partidos:any;

  constructor(private resultadosService:ResultadosService) {
    this.resultadosService.obtenerOctavos().subscribe((data:any)=>{
      console.log(data);
      this.partidos=data.partidos;
    })
   }

  ngOnInit(): void {
  }

  enviarResultados(){
    this.openPDF();
  }

  public openPDF(): void {
    if(this.participante!="")
    {
      let DATA: any = document.getElementById('htmlData');
      html2canvas(DATA).then((canvas) => {
        let fileWidth = 208;
        let fileHeight = (canvas.height * fileWidth) / canvas.width;
        const FILEURI = canvas.toDataURL('image/png');
        let PDF = new jsPDF('p', 'mm', 'a4');
        let position = 0;
        PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
        PDF.save('resultados de '+this.participante+'.pdf');
        Swal.fire({
          icon: 'success',
          title: 'Bien ahi rrope!',
          text: 'Que la suerte te acompañe. Manda el pdf al grupo',
        })
      });
    }
    else{
      Swal.fire({
        icon: 'error',
        text: 'Elegi que participante sos guacho',
      })
    }
  }


}
