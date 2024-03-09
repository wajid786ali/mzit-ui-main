import { Component, OnInit } from '@angular/core';
import { ApiClientService } from '../service/api-client.service';
import { Router } from '@angular/router';
import { TeacherRegister } from '../entity/teacher';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-teacher-register',
  templateUrl: './teacher-register.component.html',
  styleUrls: ['./teacher-register.component.css']
})
export class TeacherRegisterComponent implements OnInit {

  teacherRegister: TeacherRegister = new TeacherRegister();
  alert: boolean = false;

  constructor(private apiService: ApiClientService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void { }

  wsSubmit(teacherRegister: TeacherRegister) {
    let response = this.apiService.teacherRegister(teacherRegister);
    console.log(response)
    response.subscribe(
      (data) => {
        this.teacherRegister = data;
        this.alert = true;
      },
      (error) => {
        console.error(error);
        this.toastr.error('Failed to register teacher. Please try again later.', 'Error');
      }
    );
  }

  addNewTeacher() {
    this.teacherRegister = new TeacherRegister();
    this.alert = false;
  }

}