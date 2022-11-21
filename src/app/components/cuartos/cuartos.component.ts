import { Component, OnInit } from '@angular/core';
import { ResultadosService } from 'src/app/services/resultados.service';

import html2canvas from 'html2canvas';
import Swal from 'sweetalert2'
import jsPDF from 'jspdf';

@Component({
  selector: 'app-cuartos',
  templateUrl: './cuartos.component.html',
  styleUrls: ['./cuartos.component.css']
})
export class CuartosComponent implements OnInit {

  participante:any = "";
  partidos:any;

  constructor(private resultadoService:ResultadosService) { 
    this.resultadoService.obtenerCuartos().subscribe((data:any)=>{
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
