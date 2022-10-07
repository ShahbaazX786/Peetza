import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import Ingredient  from './models/ingredient';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  ingredientsarray: Ingredient[]=[];
  readonly URL='http://localhost:3000/ingredients';

  constructor(private http:HttpClient) { }

  getIngredients(){
    return this.http.get(this.URL)
  }

}
