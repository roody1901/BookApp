import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookdataService } from '../bookdata.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  constructor(private http:HttpClient,private bokdata:BookdataService) { }

  AuthorList:any=[];
  ngOnInit(): void {
    this.bokdata.getRecomend().subscribe((res:any)=>{
      console.log(res.items);
      this.AuthorList=res.items;
    })

  }

}
