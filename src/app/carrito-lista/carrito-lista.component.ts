import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AlimentoCarritoService } from '../alimento-carrito.service';
import { Alimento } from '../alimento-tabla/alimento';

@Component({
  selector: 'app-carrito-lista',
  templateUrl: './carrito-lista.component.html',
  styleUrl: './carrito-lista.component.css'
})
export class CarritoListaComponent {

  listaCompras!: Observable<Alimento[]>;
  constructor(private carrito: AlimentoCarritoService){
    this.listaCompras! = carrito.listaCompras.asObservable();
  }



}
