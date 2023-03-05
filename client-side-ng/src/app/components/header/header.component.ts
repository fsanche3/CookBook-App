import { Component } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient';
import { Recipe } from 'src/app/models/Recipe';
import { IngredientsService } from 'src/app/services/ingredients.service';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  displayStyle = "none";
  file: any;
  addedImg: boolean = false;
  ingredients: Ingredient[] = [];
  name: string = "";
  cook_time: string = "";
  type: string = "";
  description: string = "";
  img_url: string = "";
  instructions: string = "";

  constructor(private recipeServ: RecipeService, private ingredientsServ: IngredientsService){}


  chooseType(type: string){
    this.type = type;
  }

  addRecipe(){
   let submitRecipe = new Recipe(0, this.name, this.description, this.type, this.cook_time, this.img_url, this.instructions);
   this.recipeServ.addRecipe(submitRecipe).subscribe(x => {
    if(x){
      this.ingredientsServ.addMultipleIngredients(this.ingredients, this.name).subscribe(x => {
        console.log(x);
      });
    }
   });
   
  }

  addIngredient() {
    this.ingredients.push({
      id: this.ingredients.length + 1,
    });
  }

  removeIngredient(i: number) {
    this.ingredients.splice(i, 1);
  }

  getFile(event: any){
    if(event.target.files[0].size > 200000){
      alert("File size exceeds capicity. Please choose another.");
      return;
    } else {
      this.file = event.target.files[0];
    }
  }

  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }

}
