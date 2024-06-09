import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
export interface Project {
  id: number;
  name: string;
  description: string;
}
@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private projectsUrl = 'api/projects';  // URL de l'API des projets

  constructor(private http: HttpClient) { }

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.projectsUrl)
      .pipe(
        catchError(this.handleError<Project[]>('getProjects', []))
      );
  }

  // Ajoutez les autres méthodes pour ajouter, modifier et supprimer un projet ici

  /** Gère les erreurs HTTP */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      // Retourne un résultat vide pour que l'application continue de fonctionner
      return of(result as T);
    };
  }
}
