import { Component, inject } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-randombutton',
  templateUrl: './randombutton.component.html',
  styleUrls: ['./randombutton.component.css']
})
export class RandombuttonComponent {

  displayStyle = "none";

  constructor(private recipeServ: RecipeService){}

  ngOnInit(): void {
    // not in use
  }

  selectRandom(type: string){
   this.recipeServ.getRandomRecipe(type).subscribe(
    resp => {
      this.recipeServ.AlertRecipeChange(resp);
      this.closePopup();
    }
   )
   
  }

  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }

}