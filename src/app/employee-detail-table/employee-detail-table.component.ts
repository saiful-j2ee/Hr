import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeDetailsComponent } from '../employee-details/employee-details.component';
import { Employee_detail } from './employees.model';

@Component({
  selector: 'app-employee-detail-table',
  templateUrl: './employee-detail-table.component.html',
  styleUrls: ['./employee-detail-table.component.css']
})
export class EmployeeDetailTableComponent implements OnInit {
  Employees: any
 emoloyees= new Employee_detail()

  constructor( private http: HttpClient,private router:Router) {
    this.showTable()
   }

  ngOnInit(): void {
 
  }
  showTable() {
    const headers = { 'content-Type': 'application/json' };
    this.http.get<any>('http://localhost:8080/getDetails', { headers: headers }).subscribe(map => {
      console.log(map.Data);
      this.Employees = map.Data;
    })
  }

  editEmployee(emp:any){
this.emoloyees.id = emp.id
this.emoloyees.firstname=emp.firstname
this.emoloyees.lastname=emp.lastname
this.emoloyees.fathername=emp.fathername
this.emoloyees.mothername=emp.mothername
this.emoloyees.dateofbirth=emp.deteofbirth
this.emoloyees.placeofbirth=emp.placeofbirth
this.emoloyees.gender=emp.gender
this.emoloyees.languageknown=emp.languageknown
this.emoloyees.nationalid=emp.nationalid
this.emoloyees.birthid=emp.birthid
this.emoloyees.nationality=emp.nationality
this.emoloyees.devision=emp.devision
this.emoloyees.district=emp.district
this.emoloyees.police=emp.police
this.emoloyees.vill=emp.vill
this.emoloyees.postoffice=emp.postoffice
this.emoloyees.pcode=emp.pcode
this.emoloyees.qualification=emp.qualification
this.emoloyees.instituited=emp.instituited
this.emoloyees.pass=emp.pass
this.emoloyees.mark=emp.mark
this.emoloyees.comaddress=emp.comaddress
this.emoloyees.work=emp.work
this.emoloyees.duration=emp.duration
this.emoloyees.phone=emp.phone
console.log(this.emoloyees);

this.router.navigate(['/admin/showdetail'], { state: { emp: emp, isSave: false } })

  }
 

  deleteEmployee(emp:any){

  }
}
