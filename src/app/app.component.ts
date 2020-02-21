import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Employee Management System';
  empData:Employee[]=[];
  constructor(private datasource:DataService){
  }
  ngOnInit(){
    this.loadEmployees();
  }
  loadEmployees(){
    return this.datasource.getEmployee().subscribe((data:any)=>{
      this.empData=data;
    });
  }
}
