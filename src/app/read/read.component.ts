import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { Router } from '@angular/router';
import { ApiClientService } from '../service/api-client.service';
import { Students } from '../entity/students';
import { StudentNotes } from '../entity/studentNotes';
import { NgConfirmService } from 'ng-confirm-box';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css'],
})
export class ReadComponent implements OnInit {
  p: number = 1;
  filterTerm: string;
  student: Students = new Students();
  studentNotes: StudentNotes = new StudentNotes();
  students: any;
  studentName: string;
  studentName_new: string;
  message: string;
  nameFilter = null;
  studentId: StudentNotes;
  studentId_new: number;
  studentStatus: string;
  loading: boolean = true;

  selectedStudents: Students[] = [];

  constructor(
    private apiService: ApiClientService,
    private router: Router,
    private confirmService: NgConfirmService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.readAll();
  }

  readById(studentId: number) {
    this.apiService.getById(studentId);
  }

  setStudentStatus(status: string) {
    this.studentStatus = status;
  }

  readAll() {
    let response = this.apiService.getAll();
    response.subscribe(
      (data) => {
        this.students = data;
        setTimeout(() => {
          this.loading = false;
        }, 500);
      },
      (error) => {
        console.error(error);
        this.loading = false;
        this.toastr.error('Failed to load student data. Please try again later.', 'Error');
      }
    );
  }

  deleteById(studentId: number) {
    this.confirmService.showConfirm(
      'Are you sure want to Delete!',
      () => {
        this.apiService.deleteById(studentId).subscribe((data) => {
          this.ngOnInit();
        });
      },
      () => { 
      }
    );
  }

  update(studentId: number) {
    this.router.navigate(['update', studentId]);
  }

  home() {
    this.router.navigate(['home']);
  }

  setData(studentId: number, studentName: string) {
    this.studentName_new = studentName;
    this.studentId_new = studentId;
    this.message = '';
  }

  wsSubmit(studentNotes: StudentNotes) {
    studentNotes.studentName = this.studentName_new;
    studentNotes.studentId = this.studentId_new;
    studentNotes.center = ""+sessionStorage.getItem('custCenter');
    let response = this.apiService.addStudentNotes(studentNotes);
    this.message = '' + response;
    response.subscribe((data) => {
      this.message = data;
      if (data != null) {
        this.message = 'Note added successfully..!!';
      }
    });
  }

  addNote(studentId: number, studentName: String) {
    this.router.navigate(['/studentNotes'], {
      queryParams: { studentName: 'Application' },
    });
  }

  addStudentNote() {
    this.apiService.addStudentNotes(this.studentId).subscribe((data) => {
      console.log();
    });
  }

  selectStudent(student: Students) {
    if (this.selectedStudents.includes(student)) {
      this.selectedStudents = this.selectedStudents.filter((s) => s !== student);
    } else {
      this.selectedStudents.push(student);
    }
  }

  selectAllStudents() {
    this.selectedStudents = this.students.slice(); // Copy all students to selectedStudents array
  }

  goToEmailSendComponent() {
    // Route to EmailSendComponent and pass selected students data as query parameters
    const selectedStudentsJSON = JSON.stringify(this.selectedStudents);
  this.router.navigate(['/email'], { queryParams: { selectedStudents: selectedStudentsJSON } });
}
}
