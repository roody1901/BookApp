import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Token } from '@angular/compiler';
import {FormBuilder,FormGroup} from "@angular/forms"
import { Router } from '@angular/router';
import { BookdataService } from '../bookdata.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm !:FormGroup
  constructor(private formBuilder:FormBuilder, private http:HttpClient, private route:Router,private data:BookdataService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:[''],
      password:['']
    })

  }
  LogIn(){
    this.data.logIn(this.loginForm.value)
    .subscribe((res:any)=>{
      console.log(res);
      const user =  ({
        email:this.loginForm.value.email,password : this.loginForm.value.password
      })
      if(user){
        alert("login success");
        localStorage.setItem('token',res.access_token);
        localStorage.setItem('user',this.loginForm.value.email);
        this.loginForm.reset();
        
        this.route.navigate(['dashboard'])
      }
      else{
        alert("User not found");
      }
    },err=>{
      alert("something is wrong");
    })

  }

}
