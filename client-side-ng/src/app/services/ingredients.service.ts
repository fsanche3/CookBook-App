import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environments';
import { Ingredient } from '../models/ingredient';

@Injectable({
  providedIn: 'root'
})
export class IngredientsService {

  baseUrl: string = environment.baseUrl+"ingredients/";

  constructor(private http:HttpClient) { }

  getIngredientsByRecipe(meal: string): Observable<Ingredient[]>{
    return this.http.get(this.baseUrl+'recipe/'+meal).pipe(
      map(resp => resp as Ingredient[]));
  }

 addMultipleIngredients(ingredients: Ingredient[], recipeName: string){
  ingredients.forEach(x => {
    x.recipe_name = recipeName;
  });
  return this.http.post(this.baseUrl + 'multi', ingredients);
 }

}
