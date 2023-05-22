import { Component, OnInit } from '@angular/core';
import { ApiClientService } from '../service/api-client.service';
import { Router } from '@angular/router';
import { teacherRegister } from '../entity/teacher';

@Component({
  selector: 'app-teacher-register',
  templateUrl: './teacher-register.component.html',
  styleUrls: ['./teacher-register.component.css']
})
export class TeacherRegisterComponent implements OnInit {

  teacher : teacherRegister = new teacherRegister();  
  message: string;
 
  constructor(private apiService: ApiClientService, private router: Router) {}

  ngOnInit(): void {}

   
 
}
