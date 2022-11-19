import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorComponent } from './author/author.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { LoginComponent } from './login/login.component';
import { RecomendedComponent } from './recomended/recomended.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'dashboard',component:DashboardComponent},
  {path:'favorite',component:FavoriteComponent},
  {path:'recomended',component:RecomendedComponent},
  {path:'author',component:AuthorComponent},
  {path:'register',component:RegisterComponent},
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
