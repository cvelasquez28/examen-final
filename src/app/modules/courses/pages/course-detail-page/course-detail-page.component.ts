import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { Course } from 'src/app/shared/interfaces/course';
import { CourseService } from 'src/app/shared/services/course.service';

@Component({
  selector: 'app-course-detail-page',
  templateUrl: './course-detail-page.component.html',
  styleUrls: ['./course-detail-page.component.scss']
})
export class CourseDetailPageComponent implements OnInit {

  course: Course;

  constructor(
    private router: ActivatedRoute,
    private courseService: CourseService
    ) { }

    ngOnInit(): void {
      this.router.params.subscribe((params: Params) => {
        const id = this.getCourseId(params);
        this.courseService.getCourse(Number(id))
        .subscribe(course => this.course = course);
      });
    }

    getCourseId(params: Params): number {
      return params.id;
    }
}
