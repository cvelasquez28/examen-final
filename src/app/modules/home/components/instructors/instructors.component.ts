import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Instructor } from '../../interfaces/instructor';
import { InstructorService } from '../../services/instructor.service';

@Component({
  selector: 'app-instructors',
  templateUrl: './instructors.component.html',
  styleUrls: ['./instructors.component.scss']
})
export class InstructorsComponent implements OnInit {

  instructors: Instructor[] = [];

  constructor(private instructorService: InstructorService) { }

  ngOnInit(): void {
    this.instructorService.getInstructors()
    .subscribe(instructors => this.instructors = instructors);
  }

}
