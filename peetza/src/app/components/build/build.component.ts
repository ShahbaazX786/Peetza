import { Component, OnInit } from '@angular/core';
import { IngredientsService } from 'src/app/services/ingredients.service';
import Ingredient  from 'src/app/services/models/ingredient';

@Component({
  selector: 'app-build',
  templateUrl: './build.component.html',
  styleUrls: ['./build.component.css'],
})

export class BuildComponent implements OnInit {
  ingredients:Ingredient[] = [];
  constructor(private ingredientService:IngredientsService) {}

  ngOnInit(): void {
    this.ingredientService.getingredients()
    .subscribe((res)=>this.ingredients.push(this.ingredients[]));
    console.log(this.ingredients);
  }

}
