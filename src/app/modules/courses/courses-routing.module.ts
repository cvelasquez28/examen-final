import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseDetailPageComponent } from './pages/course-detail-page/course-detail-page.component';
import { CoursePageComponent } from './pages/course-page/course-page.component';

const routes: Routes = [
  {
    path: '',
    component: CoursePageComponent
  },
  {
    path: ':id',
    component: CourseDetailPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
