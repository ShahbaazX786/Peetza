import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import Pizza from './models/pizza';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  pizzaarray:Pizza[]=[];
  readonly URL='http://localhost:3000/pizza';

  constructor(private http:HttpClient) { }

  getPizza(){
    return this.http.get(this.URL)
  }

}
