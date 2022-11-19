import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BookdataService } from '../bookdata.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private books:BookdataService,private http:HttpClient) { }
  book:any=[];
  ngOnInit(): void {
    this.books.getBook().subscribe(result=>{
      this.book=result;
    })
  }
  AddFav(favb:any){
     this.books.addFav(favb).subscribe(result=>{
      console.log(result);
    })
  }


}
