import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursePageComponent } from './pages/course-page/course-page.component';
import { CourseDetailPageComponent } from './pages/course-detail-page/course-detail-page.component';
import { CourseGridComponent } from './components/course-grid/course-grid.component';
import { CourseDetailComponent } from './components/course-detail/course-detail.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [CoursePageComponent, CourseDetailPageComponent, CourseGridComponent, CourseDetailComponent],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    SharedModule
  ]
})
export class CoursesModule { }
