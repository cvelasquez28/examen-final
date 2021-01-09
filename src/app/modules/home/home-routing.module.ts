import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseDetailPageComponent } from '../courses/pages/course-detail-page/course-detail-page.component';
import { CoursePageComponent } from '../courses/pages/course-page/course-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'course/:id',
    component: CourseDetailPageComponent
  },
  {
    path: 'course',
    component: CoursePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
