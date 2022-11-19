import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder} from '@angular/forms'
import { Router } from '@angular/router';
import { BookdataService } from '../bookdata.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public signupForm !: FormGroup;
  constructor(private formBuilder:FormBuilder, private http:HttpClient,private route:Router) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      firstName:[''],
      lastName:[''],
      city:[''],
      age:[''],
      email:[''],
      password:['']
    });

  }
  signUp(){
    this.http.post<any>("http://localhost:9000/auth/register",this.signupForm.value)
    .subscribe(res=>{
      alert("SignUp Success");
      this.signupForm.reset();
      this.route.navigate(['login']);
    },err=>{
      alert("Somethign is wrong")
    })


  }
}
