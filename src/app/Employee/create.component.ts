import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../models/department.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  previewPhoto = false;
  dateofBirth: Date = new Date(2018, 0, 30);
  BsDatepickerConfig: Partial<BsDatepickerConfig>;
  employee: Employee = {
    id: null,
    name: null,
    designation: null,
    email: null,
    department: null,
    phoneNumber: null,
    contactPreference: null,
    isActive: null,
    photoPath: null

  };
  departments: Department[] = [
    {id: 1, name: 'Help Desk'},
    {id: 2, name: 'Admin'},
    {id: 3, name: 'HR'},
    {id: 4, name: 'IT'}
  ];

  constructor() {
    this.BsDatepickerConfig = Object.assign({},
      {
        containerClass: 'theme-blue',
        showWeekNumbers: false,
        mindate: new Date(2018, 0, 1),
        maxdate: new Date(2018, 11, 31),
        dateInputFormat: 'DD/MM/YYYY'

      });
}

  // contactPreference = 'phone';  to check radio button at from load
  isActive = 'true';
  department = 3;
  ngOnInit() {
  }
  saveEmployee(employee: Employee): void {
    console.log(employee);

  }
  togglePhotoPreview() {
    this.previewPhoto = !this.previewPhoto;
  }

}
