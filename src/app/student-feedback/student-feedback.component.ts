import { Component } from '@angular/core';
import { ApiClientService } from '../service/api-client.service';
import { Students } from '../entity/students';
import { StudentFeedBack } from '../entity/studentFeedBack';
import { Router } from '@angular/router';


@Component({
  selector: 'app-student-feedback',
  templateUrl: './student-feedback.component.html',
  styleUrls: ['./student-feedback.component.css']
})
export class StudentFeedbackComponent {
  filterWorksheet!: string;
  message: string;
  student: StudentFeedBack = new StudentFeedBack();
  students: any;
  studentFeedBack: StudentFeedBack = new StudentFeedBack();
  
  constructor(private apiService: ApiClientService,
    private router: Router
){}
  
ngOnInit() {
      this.readAll();
 }
 
readAll(){
  let response1 =this.apiService.getAll();
  response1.subscribe((data1) => { 
    this.students = data1;
  });
}

  wsSubmit(studentFeedBack: StudentFeedBack) {
    let response = this.apiService.studentFeedBack(studentFeedBack);
    response.subscribe((data) => {
      this.studentFeedBack = data;
    
      if (data != null) {
        this.message =
          'Student ' + this.student.studentName + ' added successfully..!!';
      }
    });
    this.router.navigate(['studentFeedback']);
  }
}
 
