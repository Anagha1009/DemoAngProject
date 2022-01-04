import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DemoAngProject';
  name = "Anagha Thorat";

  getId(id:any){
    alert(id);
  }

  getNumber(){
    return 100;
  }
  getName(){
    alert(this.name);
  }
  
  obj={
    name:"Anagha",
    gender:"Female",
    role:"Admin"
  }

  arr=['Anagha','Rupali','Abhishek']

  a = 100;
  b = 300;

  siteURL = window.location.href;

  myEvent(evt:any){
    console.log(evt);
  }

  show = false;
  color='blue';
}
