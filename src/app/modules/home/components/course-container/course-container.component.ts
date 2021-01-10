import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/shared/interfaces/course';

@Component({
  selector: 'app-course-container',
  templateUrl: './course-container.component.html',
  styleUrls: ['./course-container.component.scss']
})
export class CourseContainerComponent implements OnInit {

  course: Course[];
  constructor() { }

  ngOnInit(): void {
  }

}
