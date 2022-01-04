import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersdataService {

  constructor() { }

  getData() {
    return {
      name: 'Anagha',
      address: 'Airoli',
      age:25
    }
  }
}
