import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FirstProject';
  getName(name :string ,lastName:string )
  {
    alert(name)
    alert(lastName) 
  }

  getData(value:string)
  {
    console.warn(value)
  }
  
}
