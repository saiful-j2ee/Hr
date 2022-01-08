import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private router: Router,
    private loginService: LoginService, private storageService: StorageService) {
    this.formGroup = this.formBuilder.group(
      {
        email: ['', [Validators.required]],
        password: ['', [Validators.required]]
      }
    )

  }
  get f() {
    return this.formGroup.controls;
  }

  ngOnInit(): void {
    var isLoggedIn = this.storageService.isLoggedIn();
    if (isLoggedIn) this.router.navigate(['']);
  }

  loginUser(){
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
