import { Component, OnInit } from '@angular/core';
import { ApiClientService } from '../service/api-client.service';
import { Router } from '@angular/router';
import { TeacherRegister } from '../entity/teacher';

@Component({
  selector: 'app-edit-teacher',
  templateUrl: './edit-teacher.component.html',
  styleUrls: ['./edit-teacher.component.css']
})
export class EditTeacherComponent implements OnInit {

  
  teacherRegister : TeacherRegister = new TeacherRegister();  
  message: string;
 
  constructor(private apiService: ApiClientService, private router: Router) {}

  ngOnInit(): void {} 
  
}


