import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Attendance } from '../employee-attendance/attendance.model';

@Component({
  selector: 'app-attendance-information',
  templateUrl: './attendance-information.component.html',
  styleUrls: ['./attendance-information.component.css']
})
export class AttendanceInformationComponent implements OnInit {
  em: Attendance = new Attendance();

  constructor(private http: HttpClient, private router: Router) {
    //this.loadEmployee();
    this.loadAttendanceRecords();
  }

  // employees: any;
   isShowTable: boolean = false;
   isSave: boolean = true;
  records:any;

  ngOnInit(): void {
    //this.loadEmployee();
    this.loadAttendanceRecords();
  }
  
  toggleProductList() {
    this.isShowTable = !this.isShowTable;
    console.log(this.isShowTable);
  }


  // loadEmployee() {
  //   const headers = { 'content-Type': 'application/json' };
  //   this.http.get<any>('http://localhost:8080/getAll', { headers: headers }).subscribe(map => {
  //     console.log(map.Data);
  //     this.employees = map.Data;
  //   })
  // }


  // getFormattedDate(ts: any) {
  //   return new Date(ts).toLocaleDateString('en-BD')
  // }


  // editEmployee(employee: any) {
  //   this.em.id = employee.id;
    
  //   this.em.atlate=employee.atlate;
  //   this.em.fname = employee.fname;
  //   this.em.lname = employee.lname;
  //   this.em.phone = employee.phone;

   
  //   this.em.intime = employee.intime;
  //   this.em.outtime = employee.outtime;
  //   this.em.atleave = employee.atleave;
  //   this.em.password = employee.password;
  //   this.em.totalhour= employee.totalhour;
  //   this.em.wdate = employee.wdate;
  //   this.em.password = employee.password;
    
   
    
  //   this.router.navigate(['/admin/addemp'], { state: { emp: employee, isSave: false } })
  // }

  // deleteEmployee(emp:any) {
  //   const headers = { 'content-Type': 'application/json' };
  //   this.http.get("http://localhost:8080/delete/"+emp.id, { headers: headers })
  //     .subscribe(data => {
  //       console.log(data);
  //       this.loadEmployee();

  //     })


  // }


  loadAttendanceRecords() {
    const headers = { 'content-Type': 'application/json' };
    this.http.get<any>('http://localhost:8080/attendancerecords', { headers: headers }).subscribe(map => {
      console.log(map.Data);
      console.log(this.em.fname);
      
      this.records = map.Data;
    })
  }






}
