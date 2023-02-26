import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  displayStyle = "none";
  recipe_name: string = "";
  file: any;
  addresses: any[] = [{
    address: '',
    street: '',
    city: '',
    country: ''
  }];
  addAddress() {
    this.addresses.push({
      id: this.addresses.length + 1,
      address: '',
      street: '',
      city: '',
      country: ''
    });
  }

  removeAddress(i: number) {
    this.addresses.splice(i, 1);
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
