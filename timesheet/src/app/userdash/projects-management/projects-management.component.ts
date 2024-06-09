import { Component,OnInit } from '@angular/core';

interface Project {
  id: number;
  name: string;
  isActive: boolean;
}

@Component({
  selector: 'app-projects-management',
  templateUrl: './projects-management.component.html',
  styleUrls: ['./projects-management.component.css']
})
export class ProjectsManagementComponent implements OnInit {
  projects: Project[] = [
    { id: 1, name: 'Project 1', isActive: true },
    { id: 2, name: 'Project 2', isActive: false },
    { id: 3, name: 'Project 3', isActive: true },
  ];
  constructor() {}

  ngOnInit(): void {}

  toggleProjectStatus(project: Project): void {
    project.isActive = !project.isActive;
  }

}
