import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorComponent } from './author/author.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { SecurityGuard } from './guards/security.guard';
import { LoginComponent } from './login/login.component';
import { RecomendedComponent } from './recomended/recomended.component';
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {path:'dashboard',component:DashboardComponent,canActivate:[SecurityGuard]},
  {path:'favorite',component:FavoriteComponent,canActivate:[SecurityGuard]},
  {path:'recomended',component:RecomendedComponent,canActivate:[SecurityGuard]},
  {path:'author',component:AuthorComponent,canActivate:[SecurityGuard]},
  {path:'register',component:RegisterComponent},
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'search',component:SearchComponent,canActivate:[SecurityGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
