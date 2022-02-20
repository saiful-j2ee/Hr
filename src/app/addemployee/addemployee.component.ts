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
  fileToUpload: any;

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




 

  fileChange(files: any) {
    debugger;
    this.fileToUpload = files.files[0]
  }
  



  save(){
    this.submitted = true;

    // debugger;
    const formData: FormData = new FormData();
    // formData.append('id', this.ep['id'].toString());
    formData.append('designation',this.ep.designation);
    formData.append('fname',this.ep['fname']);
    formData.append('lname',this.ep['lname']);
    formData.append('department',this.ep['department']);
    formData.append('gender',this.ep['gender']);
    formData.append('dob',this.ep['dob']);
    formData.append('paddress',this.ep['paddress']);
    formData.append('praddress',this.ep['praddress']);
    formData.append('phone', this.ep['phone'].toString());
    formData.append('email',this.ep['email']);
    formData.append('password',this.ep['password'].toString());
    formData.append('basicsalary', this.ep['basicsalary'].toString());
    formData.append('houserent', this.ep['houserent'].toString());
    formData.append('medical', this.ep['medical'].toString());
    formData.append('transport', this.ep['transport'].toString());
    formData.append('overtime', this.ep['overtime'].toString());
    formData.append('salary', this.ep['salary'].toString());
  
    formData.append('file', this.fileToUpload, this.fileToUpload?.name);
   

    
    this.http.post("http://localhost:8080/saveemployee_withfile", formData)
    .subscribe(res => {
      console.log(res);
     
     
    }, err => {
      console.log("error");
      
    })


  }








// save(){
//   this.submitted = true;
//   const headers = { 'content-Type': 'application/json' };
//   this.http.post("http://localhost:8080/save", JSON.stringify(this.ep), { headers: headers }).subscribe(data => {
//     console.log(data);
//   })
// }

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



calculateSalary(){
this.ep.salary=  this.ep.basicsalary+this.ep.houserent+this.ep.transport+this.ep.medical



}
}
