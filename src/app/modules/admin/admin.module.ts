import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AddCoursePageComponent } from './pages/add-course-page/add-course-page.component';


@NgModule({
  declarations: [AddCoursePageComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
