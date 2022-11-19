import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  userName:any=''
  ngOnInit(): void {
    this.userName=localStorage.getItem('user');
    
  }

  LogOut(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

}
