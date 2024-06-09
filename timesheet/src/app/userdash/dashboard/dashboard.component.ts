import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  users = [
    {
      name: 'Sam David',
      role: 'UI designer',
      img: 'assets/img1.jpg',
      monthlyAttendance: 85,
      yearlyAttendance: 87
    },
    {
      name: 'Balbina Kherr',
      role: 'Programmer',
      img: 'assets/img2.jpg',
      monthlyAttendance: 82,
      yearlyAttendance: 85
    },
    {
      name: 'Badan John',
      role: 'Tester',
      img: 'assets/img3.jpg',
      monthlyAttendance: 94,
      yearlyAttendance: 92
    },
    {
      name: 'Salina Michael',
      role: 'UI designer',
      img: 'assets/img4.jpg',
      monthlyAttendance: 85,
      yearlyAttendance: 82
    }
  ];

  constructor() { }

  ngOnInit(): void { }
}