import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookdataService {

  constructor(private http:HttpClient) { }

  // books='https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyCeEYbG9HvMfUvTYx35R7Fh5vm-Kh3yRRY'
  booksApi:any='https://example-data.draftbit.com/books?_limit=50'
  getBook():Observable<any>{
    console.log(this.booksApi);
    return this.http.get(this.booksApi);
  }

  addFav(favBook:any){
    return this.http.post('http://localhost:9000/auth/favorites',favBook,{
      headers:{
        Authorization:'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Njg4NDc3MzIsImV4cCI6MTY2ODg2NTczMn0.809CSzB48eTHq9Zmj28UOYfDt2ds4xWTxTD49OjzXPI'
      }
    });
  }

  getFav(){
    return this.http.get('http://localhost:9000/auth/favorites',{
      headers:{
        Authorization:'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Njg4NDc3MzIsImV4cCI6MTY2ODg2NTczMn0.809CSzB48eTHq9Zmj28UOYfDt2ds4xWTxTD49OjzXPI'
      }
    });
  }

  logIn(loginData:any){
    return this.http.post('http://localhost:9000/auth/login',loginData)
  }

}
