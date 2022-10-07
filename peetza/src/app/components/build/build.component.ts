import { Component, OnInit } from '@angular/core';
import { IngredientService } from 'src/app/services/ingredients.service';
import Ingredient  from 'src/app/services/models/ingredient';

@Component({
  selector: 'app-build',
  templateUrl: './build.component.html',
  styleUrls: ['./build.component.css'],
})

export class BuildComponent implements OnInit {
  ingredients:Ingredient[] = [];
  constructor(private ingredientService:IngredientService) {}

  dataarray:Ingredient[]=[];

  ngOnInit(): void {
    this.getIngredientsList();
  }

  getIngredientsList(){
    this.ingredientService.getIngredients().subscribe((res)=>{
      this.ingredientService.ingredientsarray = res as Ingredient[];
      this.dataarray=this.ingredientService.ingredientsarray;
    });
  }

}
