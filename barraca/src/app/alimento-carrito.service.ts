import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Alimento } from './alimento-tabla/alimento';

@Injectable({
  providedIn: 'root'
})
export class AlimentoCarritoService {
  
  constructor() { }
  
  private _listaCompras: Alimento[] = []
  listaCompras : BehaviorSubject<Alimento[]> = new BehaviorSubject(this._listaCompras);

  agregarAlCarrito(alimento: Alimento) : void{
    let item = this._listaCompras.find((a1) => a1.marca == alimento.marca);
    if(!item){
      this._listaCompras.push({ ... alimento});
    }
    else{
      if(item.cantidad < alimento.stock){
        item.cantidad += alimento.cantidad;
      }
    }
    console.log(this._listaCompras);
    this.listaCompras.next(this._listaCompras);
  }

}
