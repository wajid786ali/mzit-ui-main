import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { Router } from '@angular/router';
import { ApiClientService } from '../service/api-client.service';
import { Students } from '../entity/students';
import { StudentNotes } from '../entity/studentNotes';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css'],

})
export class ReadComponent implements OnInit {

  filterTerm: string;
  student: Students = new Students();
  studentNotes: StudentNotes = new StudentNotes();
  students: any;
  studentName: string;
  studentName_new: string;
  message: string;
  nameFilter = null;
  studentId: StudentNotes;
  studentId_new: string;
  studentStatus: string;

  constructor(private apiService: ApiClientService, private router: Router) {

  }
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
    response.subscribe((data) => {
      this.students = data;
    });
  }

  deleteById(studentId: number) {
    this.apiService.deleteById(studentId).subscribe(data => {
      this.ngOnInit();
    });
    this.message = 'Student deleted successfully..!!'
  }

  update(studentId: number) {
    this.router.navigate(['update', studentId]);
  }

  home() {
    this.router.navigate(['home']);
  }

  setData(studentId: string, studentName: string) {
    this.studentName_new = studentName;
    this.studentId_new = studentId;
    this.message = "";
  }

  wsSubmit(studentNotes: StudentNotes) {
    let response = this.apiService.addStudentNotes(studentNotes);
    this.message = "" + response;
    response.subscribe((data) => {
      this.message = data;

      if (data != null) {
        this.message = " Noted  added successfully..!!";
      }
    });
  }

  addNote(studentId: number, studentName: String) {
    this.router.navigate(["/studentNotes"], {
      queryParams: { studentName: "Application" },
    });
  }

  addStudentNote() {
    this.apiService.addStudentNotes(this.studentId).subscribe(data => {
      console.log();
    })
  }

}
