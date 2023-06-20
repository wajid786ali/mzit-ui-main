import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit {
  mzlCenter:any;
  login:any;
  password:any;

  loginForm = new FormGroup({
    email : new FormControl(''),
    password : new FormControl(''),
  });

  constructor(private router: Router){}

  ngOnInit(): void {
    
  }

  onSubmit(): void {
    console.log(this.loginForm.value)
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
  }*/
  
}