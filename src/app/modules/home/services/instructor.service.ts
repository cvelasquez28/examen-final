import { Injectable } from '@angular/core';
import { Instructor } from '../interfaces/instructor';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InstructorService {

  apiUrl = `${environment.apiUrl}instructor/`;

  constructor(
    private http: HttpClient
  ) { }

  getInstructors(): Observable<Instructor[]> {
    return this.http.get<Instructor[]>(`${this.apiUrl}`);
  }

}
