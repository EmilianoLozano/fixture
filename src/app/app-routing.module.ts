import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuartosComponent } from './components/cuartos/cuartos.component';
import { FixtureComponent } from './components/fixture/fixture.component';
import { OctavosComponent } from './components/octavos/octavos.component';
import { PuntajesComponent } from './components/puntajes/puntajes.component';
import { SemisFinalComponent } from './components/semis-final/semis-final.component';

const routes: Routes = [
  {path:"",component:FixtureComponent},
  {path:"fixture",component:FixtureComponent},
  {path:"puntajes",component:PuntajesComponent},
  {path:"octavos",component:OctavosComponent},
  {path:"cuartos",component:CuartosComponent},
  {path:"semis_final",component:SemisFinalComponent},
  {path:"**",pathMatch:"full",redirectTo:"fixture"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
