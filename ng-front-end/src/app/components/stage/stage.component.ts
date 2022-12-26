import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stage',
  templateUrl: './stage.component.html',
  styleUrls: ['./stage.component.css']
})
export class StageComponent implements OnInit {

  mealSelected: boolean = false;
  name: any;
  description: any;
  type: any;
  cook_time: any;
  img_url: any;
  instructions: any;
  chef_id: any;
  looks: any;
  ingredients: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    if(sessionStorage.getItem('name') == ''){
      this.router.navigate(['home']);
    }
    this.setUp();
  
  }

  setUp(){
    this.mealSelected = !this.mealSelected;
    this.name = sessionStorage.getItem('name');
    this.description = sessionStorage.getItem('description');
    this.type = sessionStorage.getItem('type');
    this.cook_time = sessionStorage.getItem('cook_time');
    this.img_url = sessionStorage.getItem('img_url');
    this.instructions = sessionStorage.getItem('instructions');
    this.chef_id = sessionStorage.getItem('chef_id');
    this.looks = sessionStorage.getItem('looks');
    this.ingredients = sessionStorage.getItem('ingredients');

  }


}
