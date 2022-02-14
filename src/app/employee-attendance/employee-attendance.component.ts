import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-employee-attendance',
  templateUrl: './employee-attendance.component.html',
  styleUrls: ['./employee-attendance.component.css']
})
export class EmployeeAttendanceComponent implements OnInit {

  formGroup: FormGroup;
  submitted=false;

  ngOnInit(): void {
  }
  today: number = Date.now();

constructor(private formBuilder: FormBuilder, private router: Router,
  private loginService: LoginService,private storageService: StorageService ) {

    this.formGroup = this.formBuilder.group(
      {
       
        password: ['', [Validators.required]]
      }
    )


    setInterval(() => {this.today = Date.now()}, 1);
}
loginEmployee(){
  this.submitted = true;
 this.loginService.login(this.formGroup.value)
 .subscribe(res => {
   
  this.storageService.saveLoginInfo(res.data);
  console.log(res.data);
  
  this.router.navigate(['admin']);
 }, err => {
   alert("Login Failed")
   console.log(err);
   this.router.navigate(['']);
 })
}
signup() {
  this.router.navigateByUrl("signup")

}



}
