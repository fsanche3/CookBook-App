import { Component, Input, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient';
import { Recipe } from 'src/app/models/Recipe';
import { IngredientsService } from 'src/app/services/ingredients.service';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css']
})
export class MealComponent implements OnInit {

  display = 'none';
  meal: Recipe | undefined;
  displayUnits: Ingredient[] = [];

  constructor(private recipeServ: RecipeService, private ingredientServ: IngredientsService){}

  ngOnInit(){
    this.listenForMeal();
    
  }

  listenForMeal(): void{
    this.recipeServ.recipe$.subscribe(recipe => {
      this.meal = recipe;
      this.display = 'inline-grid';
      this.getRecipesIngredients(recipe.name!);
    })
  }

  
  getRecipesIngredients(mealName: string){
     this.ingredientServ.getIngredientsByRecipe(mealName).subscribe(resp => {
      this.displayUnits = resp;
    });
  }


  close(): void{
    this.display = 'none';
  }

}
