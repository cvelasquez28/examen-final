import { Component, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/shared/interfaces/course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  @Input() course: Course;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  viewCourse(index: number){
    this.router.navigate( ['/courses', index]);
  }

}
