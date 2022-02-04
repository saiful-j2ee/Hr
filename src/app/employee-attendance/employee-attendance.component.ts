import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-attendance',
  templateUrl: './employee-attendance.component.html',
  styleUrls: ['./employee-attendance.component.css']
})
export class EmployeeAttendanceComponent implements OnInit {

  

  ngOnInit(): void {
  }
  today: number = Date.now();

constructor() {
    setInterval(() => {this.today = Date.now()}, 1);
}


}
