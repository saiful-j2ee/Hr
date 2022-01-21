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
  
  isSave: boolean = true
  submitted=false;

  employee:Employee_detail = new Employee_detail()
  
  constructor(private router: Router, private http: HttpClient) { 
    
  }

  ngOnInit(): void {
    if(history.state.isSave != undefined) {
      this.employee = history.state.emp
      this.isSave = history.state.isSave
      console.log(history.state.emp);
    }
  
  
  }
  save(){
   
    console.log(this.employee);
    
    const headers = { 'content-Type': 'application/json' };
    this.http.post("http://localhost:8080/saveEmployee", JSON.stringify(this.employee), { headers: headers })
    .subscribe(data => {
      console.log(data);

    })
  }

  updateEmployee() {   
    this.isSave = true;
    const headers = {'content-Type': 'application/json' };
    this.http.post("http://localhost:8080/update", JSON.stringify(this.employee), {headers: headers})
      .subscribe(data => {
        console.log(data);
      })
    this.employee = new Employee_detail()
      // this.router.navigateByUrl("/admin/show");
      // this.submitted = true;
      //this.toastr.info("Employee Update Compleate")
  }
  

}
