import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Addemployee } from './addemployee.model';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {
  submitted=false;
  ep:Addemployee =new Addemployee();
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }
save(){
  this.submitted = true;
  const headers = { 'content-Type': 'application/json' };
  this.http.post("http://localhost:8080/save", JSON.stringify(this.ep), { headers: headers }).subscribe(data => {
    console.log(data);
  })
}
}
