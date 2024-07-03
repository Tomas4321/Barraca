import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlimentoTablaComponent } from './alimento-tabla/alimento-tabla.component';
import { CarritoListaComponent } from './carrito-lista/carrito-lista.component';

@NgModule({
  declarations: [
    AppComponent,
    AlimentoTablaComponent,
    CarritoListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
