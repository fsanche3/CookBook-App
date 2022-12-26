import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})

export class FeedComponent implements OnInit {

  @Input() food: any;

 constructor(private router: Router) { }

 
  ngOnInit(): void {
  }

  goToStage(){
    sessionStorage.setItem("name", this.food.name);
    sessionStorage.setItem("description", this.food.description);
    sessionStorage.setItem("type", this.food.type);
    sessionStorage.setItem("cook_time", this.food.cook_time);
    sessionStorage.setItem("img_url", this.food.img_url);
    sessionStorage.setItem("instructions", this.food.instructions);
    sessionStorage.setItem("chef_id", this.food.chef_id);
    sessionStorage.setItem("looks", this.food.looks);
    this.router.navigate(['stage']);

  }


}

