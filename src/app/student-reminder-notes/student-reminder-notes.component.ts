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
 
 constructor(private apiService: ApiClientService, private router: Router, private activatedRoute: ActivatedRoute ) {

 
  this.activatedRoute.paramMap.subscribe((params) => {
    this.studentName = params.get("studentName"); 
    console.log(this.studentName);
  });
}

  ngOnInit(): void {}

   
 
  wsSubmit(studentNotes: StudentNotes) {
    let response = this.apiService.studentNotes(studentNotes);
    response.subscribe((data) => {
      this.studentNotes = data;
    
      if (data != null) {
        this.message =
          'Student ' + this.studentNotes.studentName + ' Noted  added successfully..!!';
      }
    });
    this.router.navigate(['studentFeedback']);
  }
}