import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee_detail } from './Employee_detail.model';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  employee = new Employee_detail()
  
  constructor(private router: Router, private http: HttpClient) { 
    
  }

  ngOnInit(): void {
  
  }
  save(){
   
    console.log(this.employee);
    
    const headers = { 'content-Type': 'application/json' };
    this.http.post("http://localhost:8080/saveEmployee", JSON.stringify(this.employee), { headers: headers })
    .subscribe(data => {
      console.log(data);

    })
  }

}
