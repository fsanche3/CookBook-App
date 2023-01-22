import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  api_url: string  = `${environment.recipe_Url}`;

  constructor() { }

 async GetRecipeByType(type: string){

  let resp = await fetch(this.api_url+'type/'+type, {
    method:'GET',
  });

  if(resp.status === 200){
    return resp.json();
  } else {
    return false;
  }
  }
}
