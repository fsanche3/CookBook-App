import { Pipe, PipeTransform } from '@angular/core';
import { Recipe } from '../models/Recipe';

@Pipe({
  name: 'recipeSearch'
})
export class RecipeSearchPipe implements PipeTransform {

  transform(recipes: Recipe[], searchText: string): any[] {

    let filteredRecipes: any = [];

    for(let meal of recipes){
      if(meal.name?.toLowerCase().includes(searchText.toLowerCase())
      || meal.type?.toLowerCase().includes(searchText.toLowerCase())
      || meal.cook_time?.toLowerCase().includes(searchText.toLowerCase())){
        filteredRecipes.push(meal)
      }
    }
    return filteredRecipes;
  }

}
