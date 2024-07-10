import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Alimento } from './alimento-tabla/alimento';

const URLAPI = 'https://668e8ac9bf9912d4c92eb897.mockapi.io/api/v1/alimentos'; 

@Injectable({
  providedIn: 'root'
})
export class AlimentoDatosService {

  constructor(private htpp: HttpClient) { }

  public getAll():Observable<Alimento[]>{
    return this.htpp.get<Alimento[]>(URLAPI).pipe(
      tap((alimentos: Alimento[]) => alimentos.forEach(alimento => alimento.cantidad = 0))
    );
  }
}
