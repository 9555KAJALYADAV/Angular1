import { HttpClient } from '@angular/common/http';

import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {
  model:any={};

  constructor(private http:HttpClient) {
  }

  register(){
    console.log(this.model);
    debugger
    this.http.get('').subscribe((data:any) => {
    console.log(data);
  });
  }
  
}
