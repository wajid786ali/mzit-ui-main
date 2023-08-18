import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { Router } from '@angular/router';
import { ApiClientService } from '../service/api-client.service';
import { StudentNotes } from '../entity/studentNotes';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-reminders',
  templateUrl: './reminders.component.html',
  styleUrls: ['./reminders.component.css']
})
export class RemindersComponent implements OnInit {
  filterTerm: string;
  studentNotes: StudentNotes = new StudentNotes();
  StudentNotes: any;
  message: string;
  studentId: string;

  constructor(private apiService: ApiClientService, private router: Router, private toastr: ToastrService) {}

  ngOnInit() {
    this.readActiveNotes();
  }

  readInActiveNotes() {
    this.apiService.getListRemindersResolve().subscribe(
      (data) => {
        this.StudentNotes = data;
      },
      (error) => {
        console.error(error);
        this.toastr.error('Failed to load inactive reminders. Please try again later.', 'Error');
      }
    );
  }

  readActiveNotes() {
    this.apiService.getListRemindersActive().subscribe(
      (data) => {
        this.StudentNotes = data;
      },
      (error) => {
        console.error(error);
        this.toastr.error('Failed to load active reminders. Please try again later.', 'Error');
      }
    );
  }

  deleteRemindersById(studentId: string) {
    this.apiService.deleteRemindersById(studentId).subscribe(
      (data) => {
        this.ngOnInit();
      },
      (error) => {
        console.error(error);
        this.toastr.error('Failed to delete reminder. Please try again later.', 'Error');
      }
    );
    this.message = 'Student deleted successfully..!!';
  }
}
