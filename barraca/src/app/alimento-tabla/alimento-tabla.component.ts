import { Component } from '@angular/core';
import { AlimentoCarritoService } from '../alimento-carrito.service';
import { Alimento } from './alimento';

@Component({
  selector: 'app-alimento-tabla',
  templateUrl: './alimento-tabla.component.html',
  styleUrl: './alimento-tabla.component.css'
})
export class AlimentoTablaComponent {
  
  alimentos : Array<Alimento> = [{
    marca : "Royal canin",
    stock : 100,
    precio : 70000,
    imagen : "assets/img/royal-caninEditada.jpg",
    oferta : false,
    cantidad : 0,
  },
  {
    marca : "Old price",
    stock : 5,
    precio : 40000,
    imagen : "assets/img/old_price.jpg",
    oferta : true,
    cantidad : 0,

  },
  {
    marca : "Pro Plan",
    stock : 0 ,
    precio : 79000,
    imagen : "assets/img/adult_pro_plan.png.jpg",
    oferta : false,
    cantidad : 0,
  }
]


  constructor(private carrito: AlimentoCarritoService){
  }
  
  agregarAlCarrito(alimento: Alimento) : void{
    if(alimento.cantidad > 0)
    this.carrito.agregarAlCarrito(alimento);
    alimento.stock -= alimento.cantidad;
    alimento.cantidad = 0;
  }



}
