import { HttpClient, ɵHttpInterceptingHandler } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Salary } from './salary.model';

@Component({
  selector: 'app-salary',
  templateUrl: './salary.component.html',
  styleUrls: ['./salary.component.css']
})
export class SalaryComponent implements OnInit {

  sal: Salary = new Salary();

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {

  }

  save() {
    console.log(this.sal);

    const headers = { 'content-Type': 'application/json' };
    this.http.post("http://localhost:8080/salarysave", JSON.stringify(this.sal), { headers: headers })
      .subscribe(data => {
        console.log(data);

      })

  }

  load() {
    console.log(this.sal);

    const headers = { 'content-Type': 'application/json' };
    this.http.post("http://localhost:8080/salarysave", JSON.stringify(this.sal), { headers: headers })
      .subscribe(data => {
        console.log(data);

      })

  }


  calculatAbsence() {
    this.sal.absenceday = (this.sal.stdays - this.sal.workingday);

  }

  calulateAbsenceTaka() {
    this.sal.absence = this.sal.absenceday * (this.sal.basic / 30);

  }
  grossEarn() {
    this.sal.grossearn = (this.sal.basic + this.sal.bonus + this.sal.houserent + this.sal.transport + this.sal.medicalallowance + this.sal.specialallowance)
  }
  grossDedaction() {
    this.sal.grossdedaction = (this.sal.professionaltex + this.sal.incometex + this.sal.absence + this.sal.provident);

  }

  netSalary() {
    this.sal.netsalary = this.sal.grossearn-this.sal.grossdedaction;
  }
  
  onPrint() {
    this.save()
    console.log(this.sal.departnent);
    let printContents = document.getElementById("pdf")!.innerHTML;
    let originalContents = document.body.innerHTML;
    // document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
    console.log(this.sal.departnent + "ujfhugh");
  }
  

}
