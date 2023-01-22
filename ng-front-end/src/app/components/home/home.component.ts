import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isToggled: boolean = false;
  displayStyle = "none";
  dinnerList: any = [];
  lunchList: any = [];
  breakfestList: any = [];
  preview : any;
  isType: string = "";
  list: any = [];

  constructor(private recipeServ: RecipeService, private router: Router) { }

  ngOnInit(): void {
    this.GetDinner();
    this.GetLunch();
    this.GetBreakfest();
  }

  async GetDinner(){
    let resp = await this.recipeServ.GetRecipeByType('Dinner');
    this.dinnerList = resp;
  }
  async GetLunch(){
    let resp = await this.recipeServ.GetRecipeByType('Lunch');
    this.lunchList = resp;
  }
  async GetBreakfest(){
    let resp = await this.recipeServ.GetRecipeByType('Breakfest');
    this.breakfestList = resp;
    this.list = this.breakfestList;
  }

  randomBreakfest(){
    let index = this.getRandomInt(0, this.breakfestList.length);
    sessionStorage.setItem("name", this.breakfestList[index].name);
    sessionStorage.setItem("description", this.breakfestList[index].description);
    sessionStorage.setItem("type", this.breakfestList[index].type);
    sessionStorage.setItem("cook_time", this.breakfestList[index].cook_time);
    sessionStorage.setItem("img_url", this.breakfestList[index].img_url);
    sessionStorage.setItem("instructions", this.breakfestList[index].instructions);
    sessionStorage.setItem("looks", this.breakfestList[index].looks);
    this.router.navigate(['stage']);
  }

  randomLunch(){
    let index = this.getRandomInt(0, this.lunchList.length);
    sessionStorage.setItem("name", this.lunchList[index].name);
    sessionStorage.setItem("description", this.lunchList[index].description);
    sessionStorage.setItem("type", this.lunchList[index].type);
    sessionStorage.setItem("cook_time", this.lunchList[index].cook_time);
    sessionStorage.setItem("img_url", this.lunchList[index].img_url);
    sessionStorage.setItem("instructions", this.lunchList[index].instructions);
    sessionStorage.setItem("looks", this.lunchList[index].looks);
    this.router.navigate(['stage']);
  }

  randomDinner(){
    let index = this.getRandomInt(0, this.dinnerList.length);
    sessionStorage.setItem("name", this.dinnerList[index].name);
    sessionStorage.setItem("description", this.dinnerList[index].description);
    sessionStorage.setItem("type", this.dinnerList[index].type);
    sessionStorage.setItem("cook_time", this.dinnerList[index].cook_time);
    sessionStorage.setItem("img_url", this.dinnerList[index].img_url);
    sessionStorage.setItem("instructions", this.dinnerList[index].instructions);
    sessionStorage.setItem("looks", this.dinnerList[index].looks);
    this.router.navigate(['stage']);
    
  }

  getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
  }

  chooseTypeDinner(){
    this.list = this.dinnerList;
  }

  chooseTypeLunch(){
    this.list = this.lunchList;
  }
  chooseTypeBreakfest(){
    this.list = this.breakfestList;
  }

  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }

}
