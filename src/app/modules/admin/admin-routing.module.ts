import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCoursePageComponent } from './pages/add-course-page/add-course-page.component';

const routes: Routes = [
  {
    path: 'add-course',
    component: AddCoursePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
