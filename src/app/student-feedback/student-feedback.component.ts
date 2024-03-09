import { Component } from '@angular/core';
import { ApiClientService } from '../service/api-client.service';
import { ToastrService } from 'ngx-toastr';
import { StudentFeedBack } from '../entity/studentFeedBack';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-feedback',
  templateUrl: './student-feedback.component.html',
  styleUrls: ['./student-feedback.component.css']
})

export class StudentFeedbackComponent {
  alert: boolean = false;
  students: any;
  filterWorksheet: string;
  studentFeedBack: StudentFeedBack = new StudentFeedBack();

  constructor(private apiService: ApiClientService, private router: Router, private toastr: ToastrService) {

  }

  ngOnInit() {
    this.readAll();
  }

  readAll() {
    this.apiService.getAll().subscribe(data => {
      this.students = data;
    });
  }

 
  wsSubmit(studentFeedBack: StudentFeedBack) {
    let response = this.apiService.studentFeedBack(studentFeedBack);
    console.log(studentFeedBack);
    response.subscribe(
      (data) => {
        console.log(data); // Log the response data
        this.studentFeedBack = data;
        this.alert = true;
      },
      (error) => {
        console.error(error);
        this.toastr.error('Failed to submit feedback. Please try again later.', 'Error');
      }
    );
  }
  

  fetchStudentDetails() {
    const selectedStudent = this.students.find((student: { studentName: string; }) => student.studentName === this.filterWorksheet);
    if (selectedStudent) {
      this.studentFeedBack.studentName = selectedStudent.studentName;
      this.studentFeedBack.studentId = selectedStudent.studentId;
    } else {
      console.error('Selected student not found');
    }
  }

  addNewFeedback() {
    this.studentFeedBack = new StudentFeedBack();
    this.alert = false;
  }

}
