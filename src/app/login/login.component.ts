import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserName } from '../entity/username';
import { ApiClientService } from '../service/api-client.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  mzlCenter: any;
  login: any;
  password: any;
  userName: UserName = new UserName();
  message: any;
  custEmail: any;

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });


  constructor(private apiService: ApiClientService, private router: Router) { }

  ngOnInit(): void {

  }

  getData(key: string) {
    return sessionStorage.getItem(key);
  }

  onSubmit(userName: UserName) {
    let response = this.apiService.checkUserName(userName);
    response.subscribe((data) => {
      this.message = data;
      sessionStorage.setItem('custName', this.message.teacherName);
      sessionStorage.setItem('custCenter', this.message.center);
      sessionStorage.setItem('custEmail', this.message.email);
      sessionStorage.setItem('custType', this.message.type);

      if (data != null) {
        this.router.navigate(['/home']);
      } else {
        this.message = " Wrong Email and/or Password";
      }
    });

  }


  /* onSubmit(): void {
     this.mzlCenter="MindZone Learning";
     if (this.loginForm.valid) {
       this.auth.login(this.loginForm.value).subscribe(
         (result) => {
           console.log(result);
           this.router.navigate(['/home']);
         },
         (err: Error) => {
           alert(err.message);
         }
       );
     }
   }
   */
}
