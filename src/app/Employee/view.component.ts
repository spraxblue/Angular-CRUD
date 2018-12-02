import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { copyConfig } from '@angular/router/src/config';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  employees: Employee[] = [
    { 
      id: 1,
      name: 'Sarah',
      designation: 'CEO & Founder',
      email: 'sarha@pk.com',
      department: 'Admin',
      phoneNumber: 9200000900,
      contactPreference: 'Phone',
      isActive: true,
      photoPath: 'assets/img/avatar1.png'
    },
    {
      id: 2,
      name: 'Alina',
      designation: 'Manager',
      email: 'alina@pk.com',
      department: 'Admin',
      phoneNumber: 9200008800,
      contactPreference: 'Email',
      isActive: true,
      photoPath: 'assets/img/avatar2.png'
  },
  ];

  constructor() { }

  ngOnInit() {
  }
  social_media_links(choice) { switch (choice) {
    case 'd': window.location.href = 'https://dribbble.com/';
      break;
      case 't': window.location.href = 'http://www.twitter.com/';
      break;
      case 'l': window.location.href = 'http://www.linkedin.com/';
      break;
      case 'f': window.location.href = 'http://www.facebook.com/';
      break;
      default:
      return 0;
      break;
  }
}
}
