import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { collectionData, Firestore } from '@angular/fire/firestore';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResultadosService {
  

  constructor(private afs:AngularFirestore) { 

  }

  obtenerOctavos(){
    return this.afs.collection('Octavos').doc('Octavos').valueChanges();
  }

  obtenerCuartos(){
    return this.afs.collection('Cuartos').doc('Cuartos').valueChanges();
  }

  obtenerSemis(){
    return this.afs.collection('Semis').doc('Semis').valueChanges();
  }

  obtenerFinal(){
    return this.afs.collection('Final').doc('Final').valueChanges();
  }

  puntajes(){
    return this.afs.collection('Participantes').doc('Puntos').valueChanges();
  }

  actualizarPuntajes(data : any){
    return this.afs.collection("Participantes").doc("Puntos").set(data);
  }
}
