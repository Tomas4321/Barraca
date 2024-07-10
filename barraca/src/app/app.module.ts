import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AlimentoTablaComponent } from './alimento-tabla/alimento-tabla.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarracaAlimentosComponent } from './barraca-alimentos/barraca-alimentos.component';
import { BarracaContactoComponent } from './barraca-contacto/barraca-contacto.component';
import { CarritoListaComponent } from './carrito-lista/carrito-lista.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';

@NgModule({
  declarations: [
    AppComponent,
    AlimentoTablaComponent,
    CarritoListaComponent,
    BarracaAlimentosComponent,
    BarracaContactoComponent,
    InputIntegerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
