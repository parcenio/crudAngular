import { Component } from '@angular/core';

import { CoursesService } from './../services/courses.service';
import { catchError, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent {
  courses$: any;
  displayedColumns = ['name', 'category'];

  constructor(
    private coursesService: CoursesService,
    private dialog: MatDialog
  ) {
    this.courses$ = this.coursesService.listCourses().pipe(
      catchError((error) => {
        this.openErrorMessage('Erro ao carregar cursos.');
        return of([]);
      })
    );
  }
  openErrorMessage(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg,
    });
  }
}
