import { Injectable } from '@angular/core';
import { Project } from './project';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private projectsUrl = 'http://localhost:8080/projects';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { }

  getProjects(): Observable<Project[]> {
    return this.httpClient.get<Project[]>(this.projectsUrl)
  }

  updateProject(project: Project): Observable<any> {
    return this.httpClient.put(`${this.projectsUrl}/${project.id}`, project, this.httpOptions)
  }

  insertProject(project: Project): Observable<any> {
    return this.httpClient.post(this.projectsUrl, project, this.httpOptions);
  }

  deleteProject(id: Number): Observable<any> {
    return this.httpClient.delete(`${this.projectsUrl}/${id}`, this.httpOptions);
  }

}