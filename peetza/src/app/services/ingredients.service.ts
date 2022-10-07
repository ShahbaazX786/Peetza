import { Injectable } from '@angular/core';
import { WebService } from './web.service';

@Injectable({
  providedIn: 'root'
})
export class IngredientsService {

  constructor(private webService:WebService) { }

  getingredients(){
    return this.webService.get('/build');
  }

  // createingredient(_id:String, id: Number, tname: String, price: Number,image: String){
  //   return this.web.post('/ingredients',{id,tname,price,image});
  // }

  // updateingredient(_id:String, id: Number, tname: String, price: Number,image: String){
  //   return this.web.patch('/ingredients',{id,tname,price,image});
  // }

  // deleteingredient(_id: string){
  //   return this.web.delete('/ingredients');
  // }

}
