import { Component } from '@angular/core';
import { UsersdataService } from '../app/usersdata.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DemoAngProject';
  name = "Anagha Thorat";

  name1 = "";
  constructor(private user: UsersdataService) {
    console.warn(this.user.getData());
    let data=this.user.getData();
    this.name1 = data.name
  }

  getId(id: any) {
    alert(id);
  }

  getNumber() {
    return 100;
  }
  getName() {
    alert(this.name);
  }

  obj = {
    name: "Anagha",
    gender: "Female",
    role: "Admin"
  }

  arr = ['Anagha', 'Rupali', 'Abhishek']

  a = 100;
  b = 300;

  siteURL = window.location.href;

  myEvent(evt: any) {
    console.log(evt);
  }

  show = false;
  color = 'blue';
  data = ['India', 'Germany', 'UK', 'Australia']
  data1 = [{
    name: 'India',
    capital: 'Delhi',
    code: 'IND',
    currency: 'Rupees'
  }, {
    name: 'Australia',
    capital: 'Sydney',
    code: 'Aus',
    currency: 'AUD'
  }, {
    name: 'UK',
    capital: 'London',
    code: 'UK',
    currency: 'EURO'
  }]


  getUserValue(values: any) {
    console.log(values);
  }

}
