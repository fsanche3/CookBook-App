import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environments';
import { Ingredient } from '../models/ingredient';
import { IngredientRecipe } from '../models/ingredient_recipe';

@Injectable({
  providedIn: 'root'
})
export class IngredientsService {

  baseUrl: string = environment.baseUrl+"ingredients/";

  constructor(private http:HttpClient) { }

  getIngredientsByRecipe(mealId: number): Observable<IngredientRecipe[]>{
    return this.http.get(this.baseUrl+'recipe/'+mealId).pipe(
      map(resp => resp as IngredientRecipe[]));
  }

  getAllIngredients(): Observable<Ingredient[]>{
   return this.http.get(this.baseUrl).pipe(
    map(resp => resp as Ingredient[])
   );
  }

}
