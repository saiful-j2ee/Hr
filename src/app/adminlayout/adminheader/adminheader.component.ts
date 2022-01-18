import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-adminheader',
  templateUrl: './adminheader.component.html',
  styleUrls: ['./adminheader.component.css']
})
export class AdminheaderComponent implements OnInit {

  constructor(private service : StorageService, private route : Router) { }

  ngOnInit(): void {
  }


  logout(){
    this.service.logout()
    this.route.navigateByUrl("/")
  }

}
