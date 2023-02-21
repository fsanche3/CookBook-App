import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/Recipe';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css']
})
export class MealComponent implements OnInit {

  display = 'none';
  meal: Recipe | undefined;

  constructor(private recipeServ: RecipeService){}

  ngOnInit(){
    this.recipeServ.recipe$.subscribe(recipe => {
      this.meal = recipe;
      this.display = 'block';
    })
  }

  close(): void{
    this.display = 'none';
  }

}
