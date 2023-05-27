import { Component, OnInit,Input } from '@angular/core';
import { ApiClientService } from '../service/api-client.service';
import { Router } from '@angular/router';
import { StudentNotes } from '../entity/studentNotes';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-student-reminder-notes',
  templateUrl: './student-reminder-notes.component.html',
  styleUrls: ['./student-reminder-notes.component.css']
})
export class StudentReminderNotesComponent implements OnInit {

  studentNotes : StudentNotes = new StudentNotes();  
  message: string;
  studentName: any;
  studentId : any;
 
 constructor(private apiService: ApiClientService, private router: Router, private activatedRoute: ActivatedRoute ) {

 
  this.activatedRoute.queryParams.subscribe((params) => {
    this.studentName = "sajid";//params; 
    this.studentId="123";
    console.log(this.studentName);

  });
}

  ngOnInit(): void {}

   
 
  wsSubmit(studentNotes: StudentNotes) {
    let response = this.apiService.addStudentNotes(studentNotes);
    this.message =""+response;
    response.subscribe((data) => {
      this.message = data;
    
      if (data != null) {
        this.message =
          'Student ' + this.studentNotes.studentName + ' Noted  added successfully..!!';
      }
    });
   // this.router.navigate(['studentNotes']);
  }
}