import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Addemployee } from './addemployee.model';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {

  isSave: boolean = true
  submitted=false;
  formGroup:FormGroup;
  ep:Addemployee =new Addemployee();

  constructor(private fb: FormBuilder, private router: Router, private http: HttpClient) {
    this.formGroup= this.fb.group({
      email: ['', [Validators.required]],
    })
   }
   get f() {
    return this.formGroup.controls;
  }
  ngOnInit(): void {
    if(history.state.isSave != undefined) {
    this.ep = history.state.emp
    this.isSave = history.state.isSave
    console.log(history.state.emp);
  }
  }

  


save(){
  this.submitted = true;
  const headers = { 'content-Type': 'application/json' };
  this.http.post("http://localhost:8080/save", JSON.stringify(this.ep), { headers: headers }).subscribe(data => {
    console.log(data);
  })
}

updateEmployee() {   
  this.isSave = true;
  const headers = {'content-Type': 'application/json' };
  this.http.post("http://localhost:9090/employee/update", JSON.stringify(this.ep), {headers: headers})
    .subscribe(data => {
      console.log(data);
    })
  this.ep = new Addemployee()
    // this.router.navigateByUrl("/admin/show");
    // this.submitted = true;
    //this.toastr.info("Employee Update Compleate")
}


}
