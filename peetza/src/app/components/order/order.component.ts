import { Component, OnInit } from '@angular/core';
import { PizzaService } from 'src/app/services/pizza.service';

import Pizza from 'src/app/services/models/pizza';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(private pizzaService:PizzaService) { }

  dataarray:Pizza[]=[];

  ngOnInit(): void {
    this.getPizzaList();
  }

  getPizzaList(){
    return this.pizzaService.getPizza().subscribe((res)=>{
      this.pizzaService.pizzaarray = res as Pizza[];
      this.dataarray=this.pizzaService.pizzaarray;
      // console.log(this.dataarray);
      // console.log(this.pizzaService.pizzaarray);
    });
  }
}
