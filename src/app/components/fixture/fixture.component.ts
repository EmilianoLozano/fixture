import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-fixture',
  templateUrl: './fixture.component.html',
  styleUrls: ['./fixture.component.css']
})
export class FixtureComponent implements OnInit {

  fixture:any;
  arrayResultados:any;
  participante:any="";


  constructor() { 
    this.fixture=[
      {
        Grupo : 'A',
        Partidos : [
          {
            Equipo1:"QAT",
            Res1: "",
            Equipo2:"ECU",
            Res2:"",
            imagen1:"https://www.promiedos.com.ar/images/ps/qatar.gif",
            imagen2:"https://www.promiedos.com.ar/images/ps/ecuador.gif"
          },
          {
            Equipo1:"SEN",
            Res1: "",
            Equipo2:"HOL",
            Res2:"",
            imagen1:"https://www.promiedos.com.ar/images/ps/senegal.gif",
            imagen2:"https://www.promiedos.com.ar/images/ps/holanda.gif"
          },
          {
            Equipo1:"QAT",
            Res1: "",
            Equipo2:"SEN",
            Res2:"",
            imagen1:"https://www.promiedos.com.ar/images/ps/qatar.gif",
            imagen2:"https://www.promiedos.com.ar/images/ps/senegal.gif"
          },
          {
            Equipo1:"HOL",
            Res1: "",
            Equipo2:"ECU",
            Res2:"",
            imagen1:"https://www.promiedos.com.ar/images/ps/holanda.gif",
            imagen2:"https://www.promiedos.com.ar/images/ps/ecuador.gif"
          },
          {
            Equipo1:"HOL",
            Res1: "",
            Equipo2:"QAT",
            Res2:"",
            imagen1:"https://www.promiedos.com.ar/images/ps/holanda.gif",
            imagen2:"https://www.promiedos.com.ar/images/ps/qatar.gif"
          },
          {
            Equipo1:"ECU",
            Res1: "",
            Equipo2:"SEN",
            Res2:"",
            imagen1:"https://www.promiedos.com.ar/images/ps/ecuador.gif",
            imagen2:"https://www.promiedos.com.ar/images/ps/senegal.gif"
          }
        ],
      },
      {
        Grupo : 'B',
        Partidos : [
          {
            Equipo1:"ING",
            Res1: "",
            Equipo2:"IRN",
            Res2:"",
            imagen1:"https://www.promiedos.com.ar/images/ps/inglaterra.gif",
            imagen2:"https://www.promiedos.com.ar/images/ps/iran.gif"
          },
          {
            Equipo1:"USA",
            Res1: "",
            Equipo2:"GAL",
            Res2:"",
            imagen1:"https://www.promiedos.com.ar/images/ps/estadosunidos.gif",
            imagen2:"https://www.promiedos.com.ar/images/ps/gales.gif"
          },
          {
            Equipo1:"GAL",
            Res1: "",
            Equipo2:"IRN",
            Res2:"",
            imagen1:"https://www.promiedos.com.ar/images/ps/gales.gif",
            imagen2:"https://www.promiedos.com.ar/images/ps/iran.gif"
          },
          {
            Equipo1:"ING",
            Res1: "",
            Equipo2:"USA",
            Res2:"",
            imagen1:"https://www.promiedos.com.ar/images/ps/inglaterra.gif",
            imagen2:"https://www.promiedos.com.ar/images/ps/estadosunidos.gif"
          },
          {
            Equipo1:"GAL",
            Res1: "",
            Equipo2:"ING",
            Res2:"",
            imagen1:"https://www.promiedos.com.ar/images/ps/gales.gif",
            imagen2:"https://www.promiedos.com.ar/images/ps/inglaterra.gif"
          },
          {
            Equipo1:"IRN",
            Res1: "",
            Equipo2:"USA",
            Res2:"",
            imagen1:"https://www.promiedos.com.ar/images/ps/iran.gif",
            imagen2:"https://www.promiedos.com.ar/images/ps/estadosunidos.gif"
          }
        ],
      },
      {
        Grupo : 'C',
        Partidos : [
          {
            Equipo1:"ARG",
            Res1: "",
            Equipo2:"ASD",
            Res2:"",
            imagen1:"https://www.promiedos.com.ar/images/ps/argentina.gif",
            imagen2:"https://www.promiedos.com.ar/images/ps/arabiasaudita.gif"
          },
          {
            Equipo1:"MEX",
            Res1: "",
            Equipo2:"POL",
            Res2:"",
            imagen1:"https://www.promiedos.com.ar/images/ps/mexico.gif",
            imagen2:"https://www.promiedos.com.ar/images/ps/polonia.gif"
          },
          {
            Equipo1:"POL",
            Res1: "",
            Equipo2:"ASD",
            Res2:"",
            imagen1:"https://www.promiedos.com.ar/images/ps/polonia.gif",
            imagen2:"https://www.promiedos.com.ar/images/ps/arabiasaudita.gif"
          },
          {
            Equipo1:"ARG",
            Res1: "",
            Equipo2:"MEX",
            Res2:"",
            imagen1:"https://www.promiedos.com.ar/images/ps/argentina.gif",
            imagen2:"https://www.promiedos.com.ar/images/ps/mexico.gif"
          },
          {
            Equipo1:"POL",
            Res1: "",
            Equipo2:"ARG",
            Res2:"",
            imagen1:"https://www.promiedos.com.ar/images/ps/polonia.gif",
            imagen2:"https://www.promiedos.com.ar/images/ps/argentina.gif"
          },
          {
            Equipo1:"ASD",
            Res1: "",
            Equipo2:"MEX",
            Res2:"",
            imagen1:"https://www.promiedos.com.ar/images/ps/arabiasaudita.gif",
            imagen2:"https://www.promiedos.com.ar/images/ps/mexico.gif"
          }
        ],
      },
      {
        Grupo : 'D',
        Partidos : [
          {
            Equipo1:"DIN",
            Res1: "",
            Equipo2:"TUN",
            Res2:"",
            imagen1:"https://www.promiedos.com.ar/images/ps/dinamarca.gif",
            imagen2:"https://www.promiedos.com.ar/images/ps/tunez.gif"
          },
          {
            Equipo1:"FRA",
            Res1: "",
            Equipo2:"AUS",
            Res2:"",
            imagen1:"https://www.promiedos.com.ar/images/ps/francia.gif",
            imagen2:"https://www.promiedos.com.ar/images/ps/australia.gif"
          },
          {
            Equipo1:"TUN",
            Res1: "",
            Equipo2:"AUS",
            Res2:"",
            imagen1:"https://www.promiedos.com.ar/images/ps/tunez.gif",
            imagen2:"https://www.promiedos.com.ar/images/ps/australia.gif"
          },
          {
            Equipo1:"FRA",
            Res1: "",
            Equipo2:"DIN",
            Res2:"",
            imagen1:"https://www.promiedos.com.ar/images/ps/francia.gif",
            imagen2:"https://www.promiedos.com.ar/images/ps/dinamarca.gif"
          },
          {
            Equipo1:"TUN",
            Res1: "",
            Equipo2:"FRA",
            Res2:"",
            imagen1:"https://www.promiedos.com.ar/images/ps/tunez.gif",
            imagen2:"https://www.promiedos.com.ar/images/ps/francia.gif"
          
          },
          {
            Equipo1:"AUS",
            Res1: "",
            Equipo2:"DIN",
            Res2:"",
            imagen1:"https://www.promiedos.com.ar/images/ps/australia.gif",
            imagen2:"https://www.promiedos.com.ar/images/ps/dinamarca.gif"
          }
        ],
      },
      {
        Grupo : 'E',
        Partidos : [
          {
            Equipo1:"ALE",
            Res1: "",
            Equipo2:"JAP",
            Res2:"",
            imagen1:"https://www.promiedos.com.ar/images/ps/alemania.gif",
            imagen2:"https://www.promiedos.com.ar/images/ps/japon.gif"
          },
          {
            Equipo1:"ESP",
            Res1: "",
            Equipo2:"CSR",
            Res2:"",
            imagen1:"https://www.promiedos.com.ar/images/ps/espana.gif",
            imagen2:"https://www.promiedos.com.ar/images/ps/costarica.gif"
          },
          {
            Equipo1:"JAP",
            Res1: "",
            Equipo2:"CSR",
            Res2:"",
            imagen1:"https://www.promiedos.com.ar/images/ps/japon.gif",
            imagen2:"https://www.promiedos.com.ar/images/ps/costarica.gif"
          },
          {
            Equipo1:"ESP",
            Res1: "",
            Equipo2:"ALE",
            Res2:"",
            imagen1:"https://www.promiedos.com.ar/images/ps/espana.gif",
            imagen2:"https://www.promiedos.com.ar/images/ps/alemania.gif"
          },
          {
            Equipo1:"JAP",
            Res1: "",
            Equipo2:"ESP",
            Res2:"",
            imagen1:"https://www.promiedos.com.ar/images/ps/japon.gif",
            imagen2:"https://www.promiedos.com.ar/images/ps/espana.gif"
          },
          {
            Equipo1:"CSR",
            Res1: "",
            Equipo2:"ALE",
            Res2:"",
            imagen1:"https://www.promiedos.com.ar/images/ps/costarica.gif",
            imagen2:"https://www.promiedos.com.ar/images/ps/alemania.gif"
          }
        ],
      },
      {
        Grupo : 'F',
        Partidos : [
          {
            Equipo1:"MAR",
            Res1: "",
            Equipo2:"CRO",
            Res2:"",
            imagen1:"https://www.promiedos.com.ar/images/ps/marruecos.gif",
            imagen2:"https://www.promiedos.com.ar/images/ps/croacia.gif"
          },
          {
            Equipo1:"BEL",
            Res1: "",
            Equipo2:"CAN",
            Res2:"",
            imagen1:"https://www.promiedos.com.ar/images/ps/belgica.gif",
            imagen2:"https://www.promiedos.com.ar/images/ps/canada.gif"
          },
          {
            Equipo1:"BEL",
            Res1: "",
            Equipo2:"MAR",
            Res2:"",
            imagen1:"https://www.promiedos.com.ar/images/ps/belgica.gif",
            imagen2:"https://www.promiedos.com.ar/images/ps/marruecos.gif"
          },
          {
            Equipo1:"CRO",
            Res1: "",
            Equipo2:"CAN",
            Res2:"",
            imagen1:"https://www.promiedos.com.ar/images/ps/croacia.gif",
            imagen2:"https://www.promiedos.com.ar/images/ps/canada.gif"
          },
          {
            Equipo1:"CRO",
            Res1: "",
            Equipo2:"BEL",
            Res2:"",
            imagen1:"https://www.promiedos.com.ar/images/ps/croacia.gif",
            imagen2:"https://www.promiedos.com.ar/images/ps/belgica.gif"
          },
          {
            Equipo1:"CAN",
            Res1: "",
            Equipo2:"MAR",
            Res2:"",
            imagen1:"https://www.promiedos.com.ar/images/ps/canada.gif",
            imagen2:"https://www.promiedos.com.ar/images/ps/marruecos.gif"
          }
        ],
      },
      {
        Grupo : 'G',
        Partidos : [
          {
            Equipo1:"SUI",
            Res1: "",
            Equipo2:"CAM",
            Res2:"",
            imagen1:"https://www.promiedos.com.ar/images/ps/suiza.gif",
            imagen2:"https://www.promiedos.com.ar/images/ps/camerun.gif"
          },
          {
            Equipo1:"BRA",
            Res1: "",
            Equipo2:"SER",
            Res2:"",
            imagen1:"https://www.promiedos.com.ar/images/ps/brasil.gif",
            imagen2:"https://www.promiedos.com.ar/images/ps/serbia.gif"
          },
          {
            Equipo1:"CAM",
            Res1: "",
            Equipo2:"SER",
            Res2:"",
            imagen1:"https://www.promiedos.com.ar/images/ps/camerun.gif",
            imagen2:"https://www.promiedos.com.ar/images/ps/serbia.gif"
          },
          {
            Equipo1:"BRA",
            Res1: "",
            Equipo2:"SUI",
            Res2:"",
            imagen1:"https://www.promiedos.com.ar/images/ps/brasil.gif",
            imagen2:"https://www.promiedos.com.ar/images/ps/suiza.gif"
          },
          {
            Equipo1:"CAM",
            Res1: "",
            Equipo2:"BRA",
            Res2:"",
            imagen1:"https://www.promiedos.com.ar/images/ps/camerun.gif",
            imagen2:"https://www.promiedos.com.ar/images/ps/brasil.gif"
          },
          {
            Equipo1:"SER",
            Res1: "",
            Equipo2:"SUI",
            Res2:"",
            imagen1:"https://www.promiedos.com.ar/images/ps/serbia.gif",
            imagen2:"https://www.promiedos.com.ar/images/ps/suiza.gif"
          }
        ],
      },
      {
        Grupo : 'H',
        Partidos : [
          {
            Equipo1:"URU",
            Res1: "",
            Equipo2:"COR",
            Res2:"",
            imagen1:"https://www.promiedos.com.ar/images/ps/uruguay.gif",
            imagen2:"https://www.promiedos.com.ar/images/ps/coreadelsur.gif"
          },
          {
            Equipo1:"POR",
            Res1: "",
            Equipo2:"GAN",
            Res2:"",
            imagen1:"https://www.promiedos.com.ar/images/ps/portugal.gif",
            imagen2:"https://www.promiedos.com.ar/images/ps/ghana.gif"
          },
          {
            Equipo1:"COR",
            Res1: "",
            Equipo2:"GAN",
            Res2:"",
            imagen1:"https://www.promiedos.com.ar/images/ps/coreadelsur.gif",
            imagen2:"https://www.promiedos.com.ar/images/ps/ghana.gif"
          },
          {
            Equipo1:"POR",
            Res1: "",
            Equipo2:"URU",
            Res2:"",
            imagen1:"https://www.promiedos.com.ar/images/ps/portugal.gif",
            imagen2:"https://www.promiedos.com.ar/images/ps/uruguay.gif"
          },
          {
            Equipo1:"COR",
            Res1: "",
            Equipo2:"POR",
            Res2:"",
            imagen1:"https://www.promiedos.com.ar/images/ps/coreadelsur.gif",
            imagen2:"https://www.promiedos.com.ar/images/ps/portugal.gif"
          },
          {
            Equipo1:"GAN",
            Res1: "",
            Equipo2:"URU",
            Res2:"",
            imagen1:"https://www.promiedos.com.ar/images/ps/ghana.gif",
            imagen2:"https://www.promiedos.com.ar/images/ps/uruguay.gif"
          }
        ],
      }
    ];
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
