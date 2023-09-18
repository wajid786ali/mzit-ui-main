import { Component, OnInit } from '@angular/core';
import { ApiClientService } from '../service/api-client.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TeacherRegister } from '../entity/teacher';

@Component({
  selector: 'app-edit-teacher',
  templateUrl: './edit-teacher.component.html',
  styleUrls: ['./edit-teacher.component.css']
})
export class EditTeacherComponent implements OnInit {
  
  teacherData: TeacherRegister;
  
  
  constructor(private apiService: ApiClientService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const email = this.route.snapshot.paramMap.get('email');
    if (email !== null) {
      this.apiService['getTeacherByEmail'](email).subscribe((data: TeacherRegister) => {
        this.teacherData = data;
        console.log('Teacher Data:', this.teacherData);
      });
    } else {
      // Handle the case where 'email' is null, for example, by redirecting or showing an error message.
    }
  }
}