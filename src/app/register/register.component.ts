import { Component, OnInit } from '@angular/core';
import { Students } from '../entity/students';
import { Router } from '@angular/router';
import { ApiClientService } from '../service/api-client.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {

  alert: boolean = false;
  students: any;
  student: Students = new Students();
  message: string;


  constructor(private apiService: ApiClientService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void { 
  }

  
  register(student: Students) {
    let response = this.apiService.register(student);
    response.subscribe(
      (data) => {
        this.student = data; 
        this.alert = true;  
      },
      (error) => {
        console.error(error);
        this.toastr.error('Failed to register student. Please try again later.', 'Error');
      }
    );
  }
  
  addNewStudent() {
    this.student = new Students();
    this.alert = false;
  }
}