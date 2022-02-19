import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Salary } from '../salary/salary.model';

@Component({
  selector: 'app-salarytable',
  templateUrl: './salarytable.component.html',
  styleUrls: ['./salarytable.component.css']
})
export class SalarytableComponent implements OnInit {

  salary:Salary=new Salary();

  constructor(private http: HttpClient, private router: Router) {
    this.loadEmployee();
   }
   salarys: any;
   isSalaryTable: boolean = false;
   isSave: boolean = true;

  ngOnInit(): void {
    this.loadEmployee();
  }
  toggleProductList() {
    this.isSalaryTable = !this.isSalaryTable;
    console.log(this.isSalaryTable);
  }

  loadEmployee() {
    const headers = { 'content-Type': 'application/json' };
    this.http.get<any>('http://localhost:8080/getAllSalary', { headers: headers }).subscribe(map => {
      console.log(map.Data);
      this.salarys = map.Data;
    })
  }

  editEmployee(){}

  deleteEmployee(){}

}
