import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserComponent} from '../app/user/user.component';
import {AdminComponent} from '../app/admin/admin.component';
import{PageNotFoundComponent} from '../app/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path:'user',
    component:UserComponent
  },
  {
    path:'admin',
    component:AdminComponent
  },
  {
    path:'**',
    component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
