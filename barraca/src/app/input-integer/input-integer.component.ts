import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrl: './input-integer.component.css'
})
export class InputIntegerComponent {

  //Tipo
  @Input() cantidad!: number;
  @Input() max!: number;
  @Output() cantidadChange : EventEmitter<number> = new EventEmitter<number>();
  
  decrementarAlimento(): void{
    if(this.cantidad > 0){
      this.cantidad--;
      this.cantidadChange.emit(this.cantidad);
    }
  }

  sumarAlimento(): void{
    if(this.cantidad < this.max){
        this.cantidad++;
        this.cantidadChange.emit(this.cantidad);
    }
  }

  ChangeQuantity(event: Event): void {
    const inputNumber = parseInt((event.target as HTMLInputElement).value, 10); // Convierte el valor del input a un número entero

    if (!isNaN(inputNumber)) {
      // Si el valor ingresado es un número válido
      if (inputNumber >= 0) {
        // Asegúrate de que el número no sea negativo
        this.cantidad = Math.min(inputNumber, this.max);
        // Establece la cantidad como el mínimo entre el valor ingresado y el stock disponible
      } else {
        // Si el número es negativo, restablece la cantidad al valor anterior
        (event.target as HTMLInputElement).value = this.cantidad.toString();
      }
    } else {
      // Si no se ingresó un número válido, restablece la cantidad al valor anterior
      (event.target as HTMLInputElement).value = this.cantidad.toString();
    }
  }

}


