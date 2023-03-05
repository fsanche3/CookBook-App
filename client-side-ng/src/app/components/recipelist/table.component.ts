import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Recipe } from 'src/app/models/Recipe';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit{

  recipes: Recipe[] = [];
  pageSlice: Recipe[] = [];
  selected = 'option2';
  searchText: string = "";


  constructor(private recipeServ: RecipeService){}

  ngOnInit(): void {
    this.getRecipes();
  }

  showRecipe(meal: Recipe){
    this.recipeServ.AlertRecipeChange(meal);
  }

  filterBreakfest(){
   this.pageSlice = this.recipes.filter(x => x.type === "Breakfast");
  }
  filterLunch(){
    this.pageSlice = this.recipes.filter(x => x.type === "Lunch");
  }
  filterDinner(){
    this.pageSlice = this.recipes.filter(x => x.type === "Dinner");
  }

  getRecipes(){
    this.recipeServ.getAllRecipes().subscribe(resp => {
      console.log(resp);
      this.recipes = resp;
      this.pageSlice = resp.slice(0,3);
    })
  }

  onPageChange(event: PageEvent) {
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if (endIndex > this.recipes.length) {
      endIndex = this.recipes.length;
    }
    this.pageSlice = this.recipes.slice(startIndex, endIndex);
  }


}
