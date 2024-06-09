import { Component} from '@angular/core';
import { Project } from 'src/app/services/project.service';

@Component({
  selector: 'app-listesprojets',
  templateUrl: './listesprojets.component.html',
  styleUrls: ['./listesprojets.component.css']
})
export class ListesprojetsComponent  {
  projects: Project[] = [];
  newProjectName: string = '';
  newProjectDescription: string = '';
  editingProject: Project | null = null;

  addProject() {
    const newProject: Project = {
      id: this.projects.length + 1,
      name: this.newProjectName,
      description: this.newProjectDescription
    };
    this.projects.push(newProject);
    this.newProjectName = '';
    this.newProjectDescription = '';
  }

  editProject(project: Project) {
    this.editingProject = { ...project };
  }

  updateProject() {
    if (this.editingProject) {
      const index = this.projects.findIndex(p => p.id === this.editingProject!.id);
      if (index !== -1) {
        this.projects[index] = this.editingProject;
      }
      this.editingProject = null;
    }
  }

  deleteProject(id: number) {
    this.projects = this.projects.filter(project => project.id !== id);
  }
}