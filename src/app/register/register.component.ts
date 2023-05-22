import { Component, OnInit } from '@angular/core';
import { Students } from '../entity/students';
import { Router } from '@angular/router';
import { ApiClientService } from '../service/api-client.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  students: any;
  student: Students = new Students();
  message: string;
  
  constructor(private apiService: ApiClientService, private router: Router) {}

  ngOnInit(): void {}

  register(student: Students) {
    let response = this.apiService.register(student);
    response.subscribe((data) => {
      this.student = data;
      console.log(this.student.studentName)
      if (data != null) {
        this.message =
          'Student ' + this.student.studentName + ' added successfully..!!';
      }
      this.student = new Students();
    });
    this.router.navigate(['/']);
  }
 
}
