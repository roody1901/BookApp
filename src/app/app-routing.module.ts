import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorComponent } from './author/author.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { RecomendedComponent } from './recomended/recomended.component';

const routes: Routes = [
  {path:'',component:DashboardComponent},
  {path:'favorite',component:FavoriteComponent},
  {path:'recomended',component:RecomendedComponent},
  {path:'author',component:AuthorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
