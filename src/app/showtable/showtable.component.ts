import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Addemployee } from '../addemployee/addemployee.model';

@Component({
  selector: 'app-showtable',
  templateUrl: './showtable.component.html',
  styleUrls: ['./showtable.component.css']
})
export class ShowtableComponent implements OnInit {
  em: Addemployee = new Addemployee();

  constructor(private http: HttpClient, private router: Router) {
    this.loadEmployee();
  }

  employees: any;
  isShowTable: boolean = false;
  isSave: boolean = true;

  ngOnInit(): void {
    this.loadEmployee();
  }
  
  toggleProductList() {
    this.isShowTable = !this.isShowTable;
    console.log(this.isShowTable);
  }


  loadEmployee() {
    const headers = { 'content-Type': 'application/json' };
    this.http.get<any>('http://localhost:8080/getAll', { headers: headers }).subscribe(map => {
      console.log(map.Data);
      this.employees = map.Data;
    })
  }


  getFormattedDate(ts: any) {
    return new Date(ts).toLocaleDateString('en-BD')
  }


  editEmployee(employee: any) {
    this.em.id = employee.id;
    
    this.em.designation=employee.designation
    this.em.fname = employee.fname;
    this.em.lname = employee.lname;
    this.em.department = employee.department;

   
    this.em.gender = employee.gender;
    this.em.dob = employee.dob;
    this.em.paddress = employee.paddress;
    this.em.praddress = employee.praddress;
    this.em.phone= employee.phone;
    this.em.email = employee.email;
    this.em.password = employee.password;
    this.em.basicsalary = employee.basicsalary;
    this.em.houserent = employee.houserent;
    this.em.medical = employee.medical;
    this.em.transport = employee.transport;
    this.em.overtime= employee.overtime;
    this.em.salary = employee.salary;
   
    
    this.router.navigate(['/admin/addemp'], { state: { emp: employee, isSave: false } })
  }

  deleteEmployee(emp:any) {
    const headers = { 'content-Type': 'application/json' };
    this.http.get("http://localhost:8080/delete/"+emp.id, { headers: headers })
      .subscribe(data => {
        console.log(data);
        this.loadEmployee();

      })


  }


}
