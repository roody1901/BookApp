import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookdataService {

  constructor(private http:HttpClient) { }

  books='https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyCeEYbG9HvMfUvTYx35R7Fh5vm-Kh3yRRY'
  getBook():Observable<any>{
    console.log(this.books);
    return this.http.get(this.books);
  }
}
