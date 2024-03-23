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
  message: string;
  activeFilter: boolean | null = null;

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

  deleteTeacher(email: string) { 
    let response = this.apiService.deleteTeacher(email);
    response.subscribe((data) => {
      this.message = data;
      if (data != null) {
        this.message =
          'Teacher  ' + email+ ' delete successfully..!!';
      }
    });
    this.router.navigate(['list-teacher']);
  }

  editTeacher(email: string) {  
    this.router.navigate(['edit-teacher',email]); 
  } 
  
  setActiveFilter(active: boolean | null) {
    this.activeFilter = active;
  }
  
  clearActiveFilter() {
    this.activeFilter = null;
  }
  
  getFilteredTeachers(): any[] {
    if (this.activeFilter === null) {
      return this.teacherRegisters;
    } else {
      return this.teacherRegisters.filter((teacher: { active: boolean | null; }) => teacher.active === this.activeFilter);
    }
  }

  changeTeacherStatusToActive(email: string) {
    this.apiService.updateTeacherStatus(email, true).subscribe(
      (data) => {
        // Handle successful update
        this.toastr.success('Teacher status updated to active successfully.', 'Success');
        this.readAll(); // Refresh the teacher list after updating
      },
      (error) => {
        console.error(error);
        // Handle error
        this.toastr.error('Failed to update teacher status to active. Please try again later.', 'Error');
      }
    );
  }
  
}
