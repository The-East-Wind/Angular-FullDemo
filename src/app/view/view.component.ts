import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { FormGroup, FormControl,Validators } from '@angular/forms';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  employeeUpdateForm  = new FormGroup({
    id: new FormControl("",[Validators.required]),
    name : new FormControl("",[Validators.minLength(2),Validators.maxLength(25)]),
    salary: new FormControl("",[Validators.min(0)]),
    department : new FormControl("",[Validators.minLength(2)])
  });
  updateFlag:boolean=false;
  index:number;
  constructor(private app:AppComponent) { }
  empList:any[]=[...this.app.empData];
  update(event){
    this.updateFlag=true;
    this.index = event.toElement.id;
    this.employeeUpdateForm.controls['id'].setValue(this.app.empData[this.index]['id']);
    this.employeeUpdateForm.controls['name'].setValue(this.app.empData[this.index]['name']);
    this.employeeUpdateForm.controls['department'].setValue(this.app.empData[this.index]['department']);
    this.employeeUpdateForm.controls['salary'].setValue(this.app.empData[this.index]['salary']);
  }
  delete(event){
    this.app.empData.splice(event.toElement.id,1);
    this.empList.splice(event.toElement.id,1);
  }
  ngOnInit(): void {
  }
  onUpdate(){
    if(this.updateFlag===true){
      this.app.empData[this.index]=this.employeeUpdateForm.value;
      this.empList[this.index]= this.employeeUpdateForm.value;
      this.updateFlag=false;
    }
  }
}
