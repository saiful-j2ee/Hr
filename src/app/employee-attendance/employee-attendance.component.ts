import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { StorageService } from '../services/storage.service';
import { Attendance } from './attendance.model';

@Component({
  selector: 'app-employee-attendance',
  templateUrl: './employee-attendance.component.html',
  styleUrls: ['./employee-attendance.component.css']
})
export class EmployeeAttendanceComponent implements OnInit {
  att:Attendance = new Attendance();

  submitted = false;



  ngOnInit(): void {
  }
  today: number = Date.now();

  constructor( private router: Router,
    private loginService: LoginService, private storageService: StorageService,private http: HttpClient) {



    setInterval(() => { this.today = Date.now() }, 1);
  }

  loginEmployee() {

    
    this.submitted = true;
    this.loginService.employeeLogin(this.att)
      .subscribe(res => {
       console.log(res);
      this.att = res.data
        

      }, err => {
        alert("Login Failed")
        console.log(err);
        this.router.navigate(['']);
      })
  }
  signup() {
    this.router.navigateByUrl("signup")

  }

  attendanceSave(){
    console.log(this.att);
    
    
         this.submitted = true;
         const headers = { 'content-Type': 'application/json' };
         this.http.post("http://localhost:8080/saveAttendance", JSON.stringify(this.att), { headers: headers }).subscribe(data => {
           console.log(data);
         })
       }
  

}
