import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/shared/interfaces/course';
import { CourseService } from 'src/app/shared/services/course.service';

@Component({
  selector: 'app-course-container',
  templateUrl: './course-container.component.html',
  styleUrls: ['./course-container.component.scss']
})
export class CourseContainerComponent implements OnInit {

  courses: Course[];
  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.courseService.getCoursesFeatured().subscribe(
      courses => this.courses = courses
    );
  }

}
