import { Component,OnInit } from '@angular/core';

interface Project {
  id: number;
  name: string;
  totalTimeSpent: number; // en heures
}

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit{
  projects: Project[] = [
    { id: 1, name: 'Project 1', totalTimeSpent: 120 },
    { id: 2, name: 'Project 2', totalTimeSpent: 85 },
    { id: 3, name: 'Project 3', totalTimeSpent: 95 },
  ];

  constructor() {}

  ngOnInit(): void {}

  getTotalTimeSpent(): number {
    return this.projects.reduce((total, project) => total + project.totalTimeSpent, 0);
  }

}
