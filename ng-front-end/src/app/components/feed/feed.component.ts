import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})

export class FeedComponent implements OnInit {

anyEggs = {
  'id': '1',
  'name': 'Steak and eggs',
  'description': "Green eggs and ham broski",
  'type': 'Breeky',
  'cook_time': '60min',
  'img_url': "https://www.thespruceeats.com/thmb/MCGZ1A0-1tkXvdjt8G50gcTZPV0=/1855x1288/filters:fill(auto,1)/steak-and-eggs-4780185-07-0f49f22e6fc44a0c8df04f646ac81d0d.jpg",
  'intsructions': "YOO, i loved when i made steak instead of eggs instead, im feeling like a chicken wing",
  'chef_id': "2"
};

yummyEggs = {
  'id': '1',
  'name': 'Eggs',
  'description': "Green eggs broski",
  'type': 'Breeky',
  'cook_time': '1min',
  'img_url': 'https://th.bing.com/th/id/R.08d2fb4d727c58095d5fc9a86e4231d8?rik=DIhMjYXixikbyg&pid=ImgRaw&r=0',
  'intsructions': "YOO, i loved when i made steak instead of eggs instead, im feeling like a chicken wing",
  'chef_id': "2"
};

list: any[] = [this.anyEggs, this.yummyEggs];

 constructor() { }

 
  ngOnInit(): void {
  }



}
