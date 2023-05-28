import { Component, OnInit } from '@angular/core';
import { ApiClientService } from '../service/api-client.service';
import { Router } from '@angular/router';
import { TeacherRegister } from '../entity/teacher';

@Component({
  selector: 'app-teacher-register',
  templateUrl: './teacher-register.component.html',
  styleUrls: ['./teacher-register.component.css']
})
export class TeacherRegisterComponent implements OnInit {

  teacherRegister : TeacherRegister = new TeacherRegister();  
  message: string;
 
  constructor(private apiService: ApiClientService, private router: Router) {}

  ngOnInit(): void {}

   
 
  wsSubmit(teacherRegister: TeacherRegister) {
    let response = this.apiService.teacherRegister(teacherRegister);
    response.subscribe((data) => {
      this.teacherRegister = data;
    
      if (data != null) {
        this.message =
          'Student ' + this.teacherRegister.teacherName + ' added successfully..!!';
      }
    });
    this.router.navigate(['list-teacher']);
  }
}