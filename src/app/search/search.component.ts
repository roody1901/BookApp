import { Component, OnInit } from '@angular/core';
import { getConstantValue } from 'typescript';
import { HttpClient } from '@angular/common/http';
import { BookdataService } from '../bookdata.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchD:any=''
  SearchBook:any=[]
  constructor(private http:HttpClient,private books:BookdataService) { }

  ngOnInit(): void {

  }
  getValue(val:string){
    this.searchD=val;
    console.log(this.searchD);
    this.http.get(`https://www.googleapis.com/books/v1/volumes?q=${this.searchD}`).subscribe((result:any)=>{
     this.SearchBook= result.items;
    })
  }

  AddFav(favb:any){
    this.books.addFav(favb).subscribe(result=>{
     console.log(result);
   })
 }
}
