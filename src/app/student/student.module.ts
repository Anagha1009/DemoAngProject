import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetAllComponent } from './get-all/get-all.component';
import { InsertComponent } from './insert/insert.component';

@NgModule({
  declarations: [
    GetAllComponent,
    InsertComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    GetAllComponent,
    InsertComponent
  ]
})
export class StudentModule { 
  
}
