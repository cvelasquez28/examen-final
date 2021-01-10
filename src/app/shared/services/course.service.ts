import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Course } from '../interfaces/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  apiUrl = `${environment.apiUrl}course/`;

  constructor(
    private http: HttpClient
  ) { }

  // llamar servicio
  getCoursesFeatured(): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.apiUrl}?featured=true`);
  }

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.apiUrl}`);
  }

  getCourse(id: number): Observable<Course> {
    return this.http.get<Course>(`${this.apiUrl}${id}/`);
  }

}
