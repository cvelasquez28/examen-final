import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CourseContainerComponent } from './components/course-container/course-container.component';
import { InstructorsComponent } from './components/instructors/instructors.component';
import { InstructorService } from './services/instructor.service';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [HomePageComponent,
    CourseContainerComponent,
    InstructorsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ],
  providers: [{provide: InstructorService}]
})
export class HomeModule { }
