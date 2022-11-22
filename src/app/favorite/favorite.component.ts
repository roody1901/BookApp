import { Component, OnInit } from '@angular/core';
import { BookdataService } from '../bookdata.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  constructor(private bookapi:BookdataService) { }
  FavList:any=[];
  SearchFav:any=[];
  ngOnInit(): void {
   this.bookapi.getFav().subscribe((result:any)=>{
    this.FavList=result;
    })
  //  this.bookapi.getFav().subscribe((res:any)=>{
  //   this.SearchFav=res.items;
  //  })

  }

}
