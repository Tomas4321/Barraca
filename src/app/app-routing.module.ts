import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarracaAlimentosComponent } from './barraca-alimentos/barraca-alimentos.component';
import { BarracaContactoComponent } from './barraca-contacto/barraca-contacto.component';

const routes: Routes = [
  {
    path : '',
    redirectTo : 'alimentos', pathMatch :'full'
  },
  {
    path : 'alimentos',
    component : BarracaAlimentosComponent
  },
  {
    path : 'contacto',
    component : BarracaContactoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
