import { Component, OnInit } from '@angular/core';
import { ApiClientService } from '../service/api-client.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent implements OnInit {
  p: number = 1;
  teacherRegisters: any;
  loading: boolean = true;

  constructor(
    private apiService: ApiClientService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.readAll();
  }

  readAll() {
    this.apiService.getListTeachers().subscribe(
      (data) => {
        this.teacherRegisters = data;
        setTimeout(() => {
          this.loading = false;
        }, 500);
        console.log(data)
      },
      (error) => {
        console.error(error);
        this.loading = false;
        // Check the type of error and display a relevant error message
        if (error.name === 'HttpErrorResponse') {
          this.toastr.error('Failed to load teacher data. Please try again later.', 'Error');
        } else {
          this.toastr.error('An unknown error occurred. Please contact support.', 'Error');
        }
      }
    );
  }

  editTeacher(email: string) { 
    this.router.navigate(['edit-teacher', email]);
    console.log(email)
  }
  
}
