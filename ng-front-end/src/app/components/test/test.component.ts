import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  file: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  getFile(event: any){
    if(event.target.files[0].size > 200000){
      alert("File size exceeds capicity. Please choose another.");
      return;
    } else {
      this.file = event.target.files[0];
    }
  }


  uploadImage() {
    if (this.file) {
      this.uploadImg(this.file).subscribe((resp: any) => {
        console.log(resp);
      })
    } else {
      alert("Please select a file first");
    }
  }



  uploadImg(file: File): Observable<any> {
  let parameters = new FormData();
  parameters.append('file',file);
  return this.http.post<any>("http://localhost:8080/recipe/add_img",parameters);
}





}
