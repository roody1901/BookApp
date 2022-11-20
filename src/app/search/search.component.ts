import { Component, OnInit } from '@angular/core';
import { getConstantValue } from 'typescript';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchD:any=''
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
   
  }
  getValue(val:string){
    this.searchD=val;
    console.log(this.searchD);
    this.http.get(`https://www.googleapis.com/books/v1/volumes?q=${this.searchD}`)
  }

}
