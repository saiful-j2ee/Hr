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

 employee :Employee_detail= new Employee_detail()

  constructor( private http: HttpClient,private router:Router) {
    this.showTable()
   }
   
  employees: any;
  isShowTable: boolean = false;
  isSave: boolean = true;

  ngOnInit(): void {
 
  }
  showTable() {
    const headers = { 'content-Type': 'application/json' };
    this.http.get<any>('http://localhost:8080/getDetails', { headers: headers }).subscribe(map => {
      console.log(map.Data);
      this.employees = map.Data;
    })
  }
  getFormattedDate(ts: any) {
    return new Date(ts).toLocaleDateString('en-BD')
  }


  editEmployee(em:any){
this.employee.id=em.id;
this.employee.firstname=em.firstname;
this.employee.lastname=em.lastname;
this.employee.fathername=em.fathername;
this.employee.mothername=em.mothername;
this.employee.dateofbirth=em.deteofbirth;
this.employee.placeofbirth=em.placeofbirth;
this.employee.gender=em.gender;
this.employee.languageknown=em.languageknown;
this.employee.nationalid=em.nationalid;
this.employee.birthid=em.birthid;
this.employee.nationality=em.nationality;
this.employee.devision=em.devision;
this.employee.district=em.district;
this.employee.police=em.police;
this.employee.vill=em.vill;
this.employee.postoffice=em.postoffice;
this.employee.pcode=em.pcode;
this.employee.qualification=em.qualification;
this.employee.instituited=em.instituited;
this.employee.pass=em.pass;
this.employee.mark=em.mark;
this.employee.comaddress=em.comaddress;
this.employee.work=em.work;
this.employee.duration=em.duration;
this.employee.phone=em.phone;
console.log(this.employee);

this.router.navigate(['/admin/details'], { state: { emp: em, isSave: false } })

  }
 

  deleteEmployee(emp:any){
    const headers = { 'content-Type': 'application/json' };
    this.http.get("http://localhost:8080/delete_detail/"+emp.id, { headers: headers })
      .subscribe(data => {
        console.log(data);
        this.showTable();

      })

  }
}
