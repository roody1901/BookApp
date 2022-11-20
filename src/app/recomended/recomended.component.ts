import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookdataService } from '../bookdata.service';

@Component({
  selector: 'app-recomended',
  templateUrl: './recomended.component.html',
  styleUrls: ['./recomended.component.css']
})
export class RecomendedComponent implements OnInit {

  constructor( private http:HttpClient,private bokdata:BookdataService) { }
  booklist:any=[];
  ngOnInit(): void {
    this.bokdata.getRecomend().subscribe((res:any)=>{
      console.log(res.items);
      this.booklist=res.items;
    })

  }

}
