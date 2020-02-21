import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private app:AppComponent) { }
  added:boolean=false;
  employeeForm  = new FormGroup({
    id: new FormControl("",[Validators.required]),
    name : new FormControl("",[Validators.minLength(2),Validators.maxLength(25)]),
    salary: new FormControl("",[Validators.min(0)]),
    department : new FormControl("",[Validators.minLength(2)])
  });
  onSubmit(){
    this.app.empData.push(this.employeeForm.value);
    this.added=true;
  }
  ngOnInit(): void {
  }

}
