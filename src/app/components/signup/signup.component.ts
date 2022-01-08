import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Signup } from './signup.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  submitted=false;
  em:Signup=new Signup()

  constructor(private http:HttpClient ) { }

  ngOnInit(): void {
  }
  save() {
    this.submitted = true;
    const headers = { 'content-Type': 'application/json' };
    this.http.post("http://localhost:8080/signup", JSON.stringify(this.em), { headers: headers }).subscribe(data => {
      console.log(data);
    })
  }


}
