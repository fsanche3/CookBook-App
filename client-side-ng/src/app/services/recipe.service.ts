import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import { HttpClient } from '@angular/common/http';
import { map, Observable, Subject } from 'rxjs';
import { Recipe } from '../models/Recipe';



@Injectable({
  providedIn: 'root'
})

export class RecipeService {

  baseUrl: string = environment.baseUrl+"recipe/";

  constructor(private http: HttpClient) { }

  recipe$ = new Subject<Recipe>();

  AlertRecipeChange(recipe: Recipe): void{
     this.recipe$.next(recipe);
  }

  getRandomRecipe(type: string): Observable<Recipe>{
    return this.http.get(this.baseUrl+"random/"+type).pipe(
      map(resp => resp as Recipe)
    );
  }

  getAllRecipes(): Observable<Recipe[]>{
    return this.http.get(this.baseUrl+"/").pipe(
      map(resp => resp as Recipe[])
    );
    }

  addRecipe(recipe: Recipe){
    return this.http.post(this.baseUrl+'add_recipe', recipe);
  }  

}
