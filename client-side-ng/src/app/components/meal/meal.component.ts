import { Component, Input, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient';
import { IngredientRecipe } from 'src/app/models/ingredient_recipe';
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
  ingredients: Ingredient[] = [];
  displayIngredients: Ingredient[] = [];
  displayUnits: IngredientRecipe[] = [];

  constructor(private recipeServ: RecipeService, private ingredientServ: IngredientsService){}

  ngOnInit(){
    this.getAllIngredients();
    this.listenForMeal();
    
  }

  listenForMeal(): void{
    this.recipeServ.recipe$.subscribe(recipe => {
      this.meal = recipe;
      this.display = 'inline-grid';
      this.getRecipesIngredients(recipe.id!);
    })
  }

  
  getRecipesIngredients(mealId: number){
     this.ingredientServ.getIngredientsByRecipe(mealId).subscribe(resp => {
      this.displayUnits = resp;
    });
  }

  getAllIngredients(){
    this.ingredientServ.getAllIngredients().subscribe(resp => {
      this.ingredients = resp;
    })
  }

  close(): void{
    this.display = 'none';
  }

}
