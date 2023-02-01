import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { first } from 'rxjs/operators';

import { Course } from './../model/course';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private readonly API = '/assets/courses.json';

  constructor(private httpCliente: HttpClient) {}

  listCourses() {
    return this.httpCliente.get<Course[]>(this.API).pipe(
      first(),
      tap((courses) => console.log(courses))
    );
  }
}
