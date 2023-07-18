import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserName } from '../entity/username';
import { ApiClientService } from '../service/api-client.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: UserName = new UserName();
  message: any;

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private apiService: ApiClientService, private router: Router, private toastr:ToastrService) { }

  ngOnInit(): void { }

  getData(key: string) {
    return sessionStorage.getItem(key);
  }

  onSubmit(userName: UserName) {
    let response = this.apiService.checkUserName(userName);
    response.subscribe((data) => {
      this.message = data;
      console.log(data);
      if (data && data.email) {
        sessionStorage.setItem('custName', data.teacherName);
        sessionStorage.setItem('custCenter', data.center);
        sessionStorage.setItem('custEmail', data.email);
        sessionStorage.setItem('custType', data.type);

        this.router.navigate(['/home']); 
      } else { 
        this.toastr.error('Wrong Email and/or Password.','Error', {
          timeOut: 3000,
        });
      }
    }, (error) => {
      console.error(error);
      this.toastr.error('Please enter valid username or password.','Error', {
        timeOut: 3000,
      });
    });
  }


}
