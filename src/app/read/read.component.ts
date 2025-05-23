import { Component, OnInit } from '@angular/core';
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
  students: Students[] = [];
  studentName: string;
  studentName_new: string;
  nameFilter = null;
  studentId: StudentNotes;
  studentId_new: number;
  studentStatus: string;
  loading: boolean = true;
  alert: boolean = false;

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

  readById(studentId: number) {
    this.apiService.getById(studentId);
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
        // Cancelled
      }
    );
  }

  update(studentId: number) {
    this.router.navigate(['update', studentId]);
  }

  home() {
    this.router.navigate(['home']);
  }

  setStudentStatus(status: string) {
    this.studentStatus = status;
  }

  setData(studentId: number, studentName: string) {
    this.studentName_new = studentName;
    this.studentId_new = studentId;
  }

  wsSubmit(studentNotes: StudentNotes) {
    studentNotes.studentName = this.studentName_new;
    studentNotes.studentId = this.studentId_new;
    studentNotes.center = "" + sessionStorage.getItem('custCenter');
    let response = this.apiService.addStudentNotes(studentNotes);
    response.subscribe((data) => {
      this.alert = true;
    });
  }

  selectStudent(student: Students) {
    if (this.selectedStudents.includes(student)) {
      this.selectedStudents = this.selectedStudents.filter((s) => s !== student);
    } else {
      this.selectedStudents.push(student);
    }
  }

  // ✅ Select only filtered students
  selectAllStudents() {
    this.selectedStudents = this.getFilteredStudents();
  }

  // ✅ Get filtered students based on status
  getFilteredStudents(): Students[] {
    if (!this.studentStatus) {
      return this.students;
    }
    return this.students.filter(student =>
      student.status?.toLowerCase().includes(this.studentStatus.toLowerCase())
    );
  }

  goToEmailSendComponent() {
    const selectedStudentsJSON = JSON.stringify(this.selectedStudents);
    this.router.navigate(['/email'], { queryParams: { selectedStudents: selectedStudentsJSON } });
  }

  refreshPage() {
    this.router.navigateByUrl('/refresh', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/view']);
    });
  }
}
 