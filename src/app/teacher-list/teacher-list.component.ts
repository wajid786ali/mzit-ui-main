import { Component, OnInit } from '@angular/core';
import { ApiClientService } from '../service/api-client.service'; 

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent implements OnInit {
  p: number = 1;
  teacherRegisters: any;
  loading: boolean = true;

  constructor(private apiService: ApiClientService) {}

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
      },
      (error) => {
        console.error(error);
        // Handle error and display appropriate message to the user
      }
    );
  }
 
}